import React from 'react';
import classes from './modal.module.scss';

interface IModalProps {
    children?: React.ReactNode;
    isShown: boolean;
}

function Modal({ children, isShown }: IModalProps) {
    const modalClass = [
        classes.modalContainer,
        isShown ? classes.modalShow : classes.modalHide,
    ];
    return <div className={modalClass.join(' ')}>{children}</div>;
}

export default Modal;
