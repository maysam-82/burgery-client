import React from 'react';
import classes from './burgerControl.module.scss';

interface IBurgerControlProps {
    label: string;
    type: string;
    handleUpdateIngredients: (type: string, isAdded: boolean) => void;
}

function BurgerControl({
    label,
    handleUpdateIngredients,
    type,
}: IBurgerControlProps) {
    return (
        <div className={classes.burgerControlContainer}>
            <div className={classes.label}>{label}</div>
            <button
                className={classes.less}
                onClick={() => {
                    handleUpdateIngredients(type, false);
                }}
            >
                <i className="fas fa-minus-square"></i>
            </button>
            <button
                className={classes.more}
                onClick={() => {
                    handleUpdateIngredients(type, true);
                }}
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </div>
    );
}

export default BurgerControl;
