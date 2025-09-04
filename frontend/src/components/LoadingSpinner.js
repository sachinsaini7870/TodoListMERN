import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner">
                <i className="fa-solid fa-spinner fa-spin"></i>
                <p>Loading todos...</p>
            </div>
        </div>
    )
}

export default LoadingSpinner