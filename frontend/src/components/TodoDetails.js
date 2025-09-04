import React, { useState } from 'react'
import { useTodosContext } from '../hooks/useTodoContext';
import ShowTodo from './ShowTodo';
import EditTodo from './EditTodo';
import api from '../api';


const TodoDetails = ({ todo }) => {
    const { dispatch } = useTodosContext();
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);
    const [editDesc, setEditDesc] = useState(todo.desc);
    const [error, setError] = useState(null)

   // Deleting the todo item and sends DELETE request to API
    const handleDelete = async () => {
        try {
            const response = await api.delete('/api/todos/' + todo._id);
            const data = response.data;
            if (response.status === 200)
                dispatch({ type: 'DELETE_TODO', payload: data });
        } catch (err) {
            setError(err.response?.data?.error || err.response.statusText + ', ' + err.message || 'Delete failed');
            console.log(error);

        }
    }

    // Updating the todo item and sends PATCH request to API with updated title and desc.
    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedTodo = {
            title: editTitle,
            desc: editDesc
        }

        try {
            const response = await api.patch('/api/todos/' + todo._id, updatedTodo, {
                headers: { 'Content-Type': 'application/json' }
            });
            const data = response.data;
            dispatch({ type: 'UPDATE_TODO', payload: data });
            setIsEditing(false);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.error || err.response.statusText + ', ' + err.message || 'Update failed');
            console.log(error);

        }
    }

    // oggling the completed status of the todo and sends PATCH request to API
    const handleToggleComplete = async (todoId, newCompletedStatus) => {
        try {
            const response = await api.patch('/api/todos/status/' + todoId, {
                completed: newCompletedStatus
            }, {
                headers: { 'Content-Type': 'application/json' }
            });
            const data = response.data;
            dispatch({ type: 'UPDATE_TODO', payload: data });

        } catch (err) {
            console.error('Toggle completion failed:', err.response?.data?.error || err.message);
            setError(err.response?.data?.error || 'Failed to update todo status');
            setTimeout(() => setError(null), 3000); // Clear error after 3 seconds
        }
    }

    // Switches to edit mode and initializes edit fields.
    const handleEdit = () => {
        setIsEditing(true);
        setEditTitle(todo.title);
        setEditDesc(todo.desc);

    }

    // Cancels edit mode and resets edit fields and error.
    const handleCancel = () => {
        setIsEditing(false);
        setEditTitle(todo.title);
        setEditDesc(todo.desc);

        setError(null);
    }



    return (
        <>
            <div className={`${todo.completed ? 'completed-container' : 'pending-container'}`}>
                {!isEditing ? (
                    // Display todo details
                    <ShowTodo todo={todo} handleEdit={handleEdit} handleDelete={handleDelete} handleToggleComplete={handleToggleComplete} />
                ) : (
                    //  display Edit detail form
                    <EditTodo
                        handleUpdate={handleUpdate}
                        handleCancel={handleCancel}
                        editTitle={editTitle}
                        setEditTitle={setEditTitle}
                        editDesc={editDesc}
                        setEditDesc={setEditDesc}
                        error={error}
                    />
                )}
            </div>
        </>
    )
}

export default TodoDetails