import React from 'react';
import { controls } from '../../../data/controls';
import BurgerControl from './BurgerControl/BurgerControl';

import classes from './burgerControls.module.scss';

interface IBurgerControlsProps {
    handleUpdateIngredients: (type: string, isAdded: boolean) => void;
    price: number;
    purchasable: boolean;
    handleOrder: () => void;
}

function BurgerControls({
    handleUpdateIngredients,
    price,
    purchasable,
    handleOrder,
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
            <div className={classes.controlsContainer}>{renderControls}</div>
            <div className={classes.buttonContainer}>
                <button
                    className={classes.orderButton}
                    disabled={!purchasable}
                    onClick={handleOrder}
                >
                    ORDER NOW! <i className="fas fa-hamburger"></i>
                </button>
            </div>
        </div>
    );
}

export default BurgerControls;
