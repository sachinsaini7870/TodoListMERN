import React from 'react'

const NoTodoFound = ({todos}) => {
    return (
        <div className="no-todos-container">
            <div className="no-todos-message">
                <i className="fa-solid fa-clipboard-list"></i>
                <h3>No todos found</h3>
                <p>
                    {todos === null
                        ? "Loading your todos..."
                        : "No todos match your search or you not created any todos yet."
                    }
                </p>
            </div>
        </div>
    )
}

export default NoTodoFound