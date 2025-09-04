import React, { useState } from 'react'
import { useTodosContext } from '../hooks/useTodoContext'
import api from '../api'

const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const { dispatch, globalPageNo } = useTodosContext();

    // Handles search form submission, If input is empty, fetches all todos and clears search.Otherwise, fetches search results from API.
    const handleSearch = async (e) => {
        e.preventDefault();

        // If search query is empty, fetch all todos and clear search
        if (!searchQuery.trim()) {
            const response = await api.get('/api/todos/')
            const data = response.data.docs;

            if (data) {
                dispatch({ type: 'SET_TODOS', payload: data })
            }
            handleClearSearch();
            return;
        }

        setIsSearching(true);
        
        try {
            const response = await api.get(`/api/todos/search/${searchQuery.trim()}`);
            dispatch({ type: 'SET_TODOS', payload: response.data });
        } catch (error) {
            console.error('Search error:\n' + (error.response?.data?.error || error.message));
            dispatch({ type: 'SET_TODOS', payload: [] });
        } finally {
            setIsSearching(false);
        }
    };

    // Clears the search input and fetches all todos for the current page. 
    const handleClearSearch = async () => {
        setSearchQuery('');
        setIsSearching(true);

        try {
            const response = await api.get('/api/todos/', {
                params: {
                    page: globalPageNo || 1,
                    limit: 10
                }
            });
            dispatch({ type: 'SET_TODOS', payload: response.data.docs });
        } catch (error) {
            console.error('Error fetching all todos:\n' + (error.response?.data?.error || error.message));
        } finally {
            setIsSearching(false);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);

        // If input is cleared, fetch all todos
        if (value.trim() === '') {
            handleClearSearch();
        }
    };

    return (

        <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-container">
                <input
                    type="text"
                    placeholder="Search todos..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="search-input"
                />
                <button
                    type="submit"
                    className="search-btn"
                    disabled={isSearching}
                >
                    {isSearching ? (
                        <i className="fa-solid fa-spinner fa-spin"></i>
                    ) : (
                        <i className="fa-solid fa-search"></i>
                    )}
                </button>
               
            </div>
        </form>

    )
}

export default SearchBar