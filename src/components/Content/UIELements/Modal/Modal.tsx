import React, { useEffect } from 'react'
import { createPortal } from 'react-dom';
import s from './Modal.module.scss'

const Modal = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
 }, []);
 
  return (
    <div className={s.modal}>
      <button 
        onClick={() => {
          handleClose();
          document.body.style.overflow = 'unset';
        }} 
        className="close-btn">
        Close
      </button>
      <div className={s.modal_content}>{children}</div>
    </div>
  );
}
export default Modal;