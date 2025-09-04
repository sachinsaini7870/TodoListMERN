import React, { useState } from 'react'
import { format, parseISO } from 'date-fns';
import ConfirmDelete from './ConfirmDelete';

const ShowTodo = ({ todo, handleEdit, handleDelete, handleToggleComplete }) => {
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    // format date time for easy read
    const date = todo.updatedAt>todo.createdAt?todo.updatedAt:todo.createdAt;
    const parsedate = parseISO(date);
    const customFormat = format(parsedate, 'd MMM yyyy,  h:mm a');

    const handleDeleteClick = () => {
        setShowDeleteConfirm(true);
    };

    const handleConfirmDelete = () => {
        handleDelete();
        setShowDeleteConfirm(false);
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirm(false);
    };

    return (
        <>
            <div className="todo-actions-container">
                <div className="todo-title-container">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleComplete(todo._id, !todo.completed)}
                        className="todo-checkbox"
                    />
                    <h4 className={`${todo.completed ? 'completed-title' : 'pending-title'}`}>{todo.title}</h4>
                </div>
                <div className='todo-actions' >

                    <span className='todo-status'>{todo.completed ?
                        <span className='complete'>Completed</span> :
                        <span className='pending'>Pending</span>}</span>
                    <span className="material-symbols-outlined edit-icon" onClick={handleEdit}>
                        <i className="fa-solid fa-edit"></i>
                    </span>
                    <span className="material-symbols-outlined delete-icon" onClick={handleDeleteClick}>
                        <i className="fa-solid fa-trash"></i>
                    </span>
                    <ConfirmDelete
                        isOpen={showDeleteConfirm}
                        onConfirm={handleConfirmDelete}
                        onCancel={handleCancelDelete}
                    />

                </div>
            </div>
            <p className={`${todo.completed ? 'completed-desc' : ''}`} >{todo.desc}</p>
            <br />
            <p>Last updated: {customFormat}</p>


        </>
    )
}

export default ShowTodo