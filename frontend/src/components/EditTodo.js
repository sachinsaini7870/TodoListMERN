import React from 'react'

const EditTodo = ({ handleUpdate, handleCancel, editTitle, editDesc, setEditTitle, setEditDesc, error }) => {

    return (
        <form onSubmit={handleUpdate} className="edit-form">
            <div className="edit-field">
                <label htmlFor="edit-title">Title:</label>
                <input
                    type="text"
                    id="edit-title"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="edit-input"
                    required
                />
            </div>

            <div className="edit-field">
                <label htmlFor="edit-desc">Description:</label>
                <textarea
                    id="edit-desc"
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                    className="edit-textarea"
                    rows="3"
                />
            </div>

            <div className="edit-buttons">
                <button type="submit" className="save-btn">Save</button>
                <button type="button" onClick={handleCancel} className="cancel-btn">Cancel</button>
            </div>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default EditTodo