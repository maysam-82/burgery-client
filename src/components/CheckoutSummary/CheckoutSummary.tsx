import React from 'react';
import Burger from '../Burger';
import Button from '../Button';
import { IIngredients } from '../../types/ingredients';

import classes from './checkoutSummary.module.scss';

interface ICheckoutSummaryProps {
    ingredients: IIngredients;
    handleCheckoutCancel: () => void;
    handleCheckoutContinue: () => void;
}

function CheckoutSummary({
    ingredients,
    handleCheckoutCancel,
    handleCheckoutContinue,
}: ICheckoutSummaryProps) {
    return (
        <div className={classes.checkoutSummaryContainer}>
            <h1> Hope it tastes well!</h1>
            <div className={classes.summaryContent}>
                <Burger ingredients={ingredients} />
            </div>
            <div className={classes.buttonContainer}>
                <Button type="cancel" handleClick={handleCheckoutCancel}>
                    CANCEL
                </Button>
                <Button type="danger" handleClick={handleCheckoutContinue}>
                    CONTINUE
                </Button>
            </div>
        </div>
    );
}

export default CheckoutSummary;
