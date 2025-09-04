import { createContext, useReducer, useState } from "react"

export const TodosContext = createContext();

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            // Set todos list and reset searching status
            return {
                todos: action.payload,
                isSearching: false
            }
        case 'CREATE_TODO':
            // Add new todo to the beginning of the list
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case 'DELETE_TODO':
            // Remove todo by _id
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    return (todo._id !== action.payload._id)
                })
            }
        case 'UPDATE_TODO':
            // Update todo by _id
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo._id === action.payload._id ? action.payload : todo
                )
            }
        case 'SEARCH_START':
            // Set searching status to true
            return {
                ...state,
                isSearching: true
            }
        case 'SEARCH_END':
            // Set searching status to false
            return {
                ...state,
                isSearching: false
            }
        case 'SEARCH_RESULTS':
            // Set todos to search results and reset searching status
            return {
                todos: action.payload,
                isSearching: false
            }
        default:
            // Show current state for unknown actions
            return state
    }
}

export const TodosContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, {
        todos: null,
        isSearching: false
    })

    // Global pagination controlers
    const [globalPageNo, setGlobalPageNo] = useState(1);
    const [globalPageLimit, setGlobalPageLimit] = useState(10);

    // Provide state, dispatch, and pagination controls to children
    return (
        <TodosContext.Provider value={{ ...state, dispatch, globalPageNo, setGlobalPageNo, globalPageLimit, setGlobalPageLimit }}>
            {children}
        </TodosContext.Provider>
    )
}