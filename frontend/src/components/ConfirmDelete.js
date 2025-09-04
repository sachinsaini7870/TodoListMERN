import React from 'react';

const ConfirmDelete = ({ isOpen, onConfirm, onCancel}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="confirm-dialog">       
        <div className="confirm-text">
          <p>{'Are you sure you want to delete?'}</p>
        </div>
        <div className="confirm-footer">
          <button className="confirm-btn confirm-yes" onClick={onConfirm}>
            Confirm
          </button>
          <button className="confirm-btn confirm-no" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmDelete;
