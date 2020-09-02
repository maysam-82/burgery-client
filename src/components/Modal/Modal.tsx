import React, { Fragment } from 'react';
import classes from './modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

interface IModalProps {
    children?: React.ReactNode;
    isShown: boolean;
    handleModalClose: () => void;
}

function Modal({ children, isShown, handleModalClose }: IModalProps) {
    const modalClass = [
        classes.modalContainer,
        isShown ? classes.modalShow : classes.modalHide,
    ];
    return (
        <Fragment>
            <Backdrop isShown={isShown} handleClose={handleModalClose} />
            <div className={modalClass.join(' ')}>{children}</div>;
        </Fragment>
    );
}

export default Modal;
