import React from 'react';
import classes from './backdrop.module.scss';

interface IBackdropProps {
    isShown: boolean;
    handleClick: () => void;
}

function Backdrop({ isShown, handleClick }: IBackdropProps) {
    return isShown ? (
        <div className={classes.backdropContainer} onClick={handleClick}></div>
    ) : null;
}

export default Backdrop;
