import React, { useState } from 'react'
import { useTodosContext } from '../hooks/useTodoContext'
import api from '../api';

const TodoForm = () => {

    const { dispatch } = useTodosContext();
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [error, setError] = useState(null)



    const handleSubmit = async (e) => {
        e.preventDefault();

        const todo = { title, desc };

        try {
            // Send POST request to create new todo and clear input fields and error on success
            const response = await api.post('/api/todos/', todo, {
                headers: { 'Content-Type': 'application/json' }
            });
            setTitle('');
            setDesc('');
            setError(null);
            
            // Update global todos state with new todo
            dispatch({ type: 'CREATE_TODO', payload: response.data });
        } catch (err) {
            setError(err.response?.data?.error || err.response.statusText + '\n' + err.message || "Failed to create");
            console.log(error);
            
        }

    }

    return (
        <form onSubmit={handleSubmit} className="create">
            <h3>Add a New Todo</h3>

            <label className='block' htmlFor='title'>Title:</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='block input-field'
                id='title'
            />

            <label className='block' htmlFor='desc'>Description:</label>
            <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows='5'
                className='block input-field'
                id='desc'
            />

            <button>Add Todo</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default TodoForm