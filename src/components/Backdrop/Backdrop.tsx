import React from 'react';
import classes from './backdrop.module.scss';

interface IBackdropProps {
    isShown: boolean;
    handleClose: () => void;
}

function Backdrop({ isShown, handleClose }: IBackdropProps) {
    return isShown ? (
        <div className={classes.backdropContainer} onClick={handleClose}></div>
    ) : null;
}

export default Backdrop;
