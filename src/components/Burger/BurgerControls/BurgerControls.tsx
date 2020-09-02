import React from 'react';
import { controls } from '../../../data/controls';
import BurgerControl from './BurgerControl/BurgerControl';

import classes from './burgerControls.module.scss';

interface IBurgerControlsProps {
    handleUpdateIngredients: (type: string, isAdded: boolean) => void;
    price: number;
}

function BurgerControls({
    handleUpdateIngredients,
    price,
}: IBurgerControlsProps) {
    const renderControls = controls.map(({ id, label, type }) => (
        <BurgerControl
            key={id}
            label={label}
            type={type}
            handleUpdateIngredients={handleUpdateIngredients}
        />
    ));
    return (
        <div className={classes.burgerControlsContainer}>
            <p className={classes.price}>
                Current Price: <strong>${price.toFixed(2)}</strong>
            </p>
            {renderControls}
        </div>
    );
}

export default BurgerControls;
