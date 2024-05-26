import React from 'react';
import './Modal.css';

function Modal ({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <a onClick={onClose} className="modal-close">X</a>
                {children}
            </div>
        </div>
    );
};

export default Modal;