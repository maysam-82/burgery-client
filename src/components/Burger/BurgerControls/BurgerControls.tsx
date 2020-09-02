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
            {renderControls}
            <button
                className={classes.orderButton}
                disabled={!purchasable}
                onClick={handleOrder}
            >
                ORDER NOW! <i className="fas fa-hamburger"></i>
            </button>
        </div>
    );
}

export default BurgerControls;
