import React from 'react';
import classes from './spinner.module.scss';
interface ISpinnerProps {
    text?: string;
}

const Spinner = ({ text }: ISpinnerProps) => {
    return (
        <div className={classes.spinnerContainer}>
            <div className={classes.spinner}>
                <div className={classes.spinnerLine}></div>
                <div className={classes.spinnerLine}></div>
                <div className={classes.spinnerLine}></div>
                <div className={classes.spinnerLine}></div>
                <div className={classes.spinnerLine}></div>
                <div className={classes.spinnerLine}></div>
                {text ? <p>{text}</p> : null}
            </div>
        </div>
    );
};

export default Spinner;
