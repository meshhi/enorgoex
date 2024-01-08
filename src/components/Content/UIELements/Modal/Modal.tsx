import React, { useEffect } from 'react'
import { createPortal } from 'react-dom';
import s from './Modal.module.scss'
import { Icon } from '@iconify/react/dist/iconify.js';

const Modal = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
 }, []);
 
  return (
    <div className={s.modal}>
      <div className={s.modal_inner_container}>
        <button 
          className={s.modal_close_btn}
          onClick={() => {
            handleClose();
            document.body.style.overflow = 'unset';
          }}>
          <div className={s.icon_container}>
            <Icon
            icon="carbon:close-outline"
            className={s.icon}
            />
          </div>
        </button>
        <div className={s.modal_content}>{children}</div>
      </div>
    </div>
  );
}
export default Modal;