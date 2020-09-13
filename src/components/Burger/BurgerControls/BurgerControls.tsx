import React from 'react';
import { controls } from '../../../data/controls';
import BurgerControl from './BurgerControl/BurgerControl';

import classes from './burgerControls.module.scss';

interface IBurgerControlsProps {
    handleUpdateIngredients: (type: string, isAdded: boolean) => void;
    price: number;
    purchasable: boolean;
    handleOrder: () => void;
    isAuthenticated: boolean;
}

function BurgerControls({
    handleUpdateIngredients,
    price,
    purchasable,
    handleOrder,
    isAuthenticated,
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
                    {isAuthenticated ? 'ORDER NOW!' : 'SIGN UP TO ORDER'}{' '}
                    <i className="fas fa-hamburger"></i>
                </button>
            </div>
        </div>
    );
}

export default BurgerControls;
