import React from 'react';
import './Modal.css'; // Stijlen voor de modal

function Modal ({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <button onClick={onClose} className="modal-close">X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;