import React, { Fragment } from 'react';
import { IIngredients } from '../../types/ingredients';
import classes from './orderSummary.module.scss';

interface IOrderSummaryProps {
    ingredients: IIngredients;
}

function OrderSummary({ ingredients }: IOrderSummaryProps) {
    const renderIngredientSummary = () => {
        const ingredientSummary = [];
        for (const key in ingredients) {
            ingredientSummary.push({ type: key, value: ingredients[key] });
        }
        return ingredientSummary.map(({ type, value }) => (
            <li key={type}>
                <span className={classes.orderSummaryContainer}>{type}</span> :
                {value}
            </li>
        ));
    };

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{renderIngredientSummary()}</ul>
            <p>Checkout</p>
        </Fragment>
    );
}

export default OrderSummary;
