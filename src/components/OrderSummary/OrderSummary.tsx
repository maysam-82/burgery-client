import React from 'react';
import { IIngredients } from '../../types/ingredients';
import classes from './orderSummary.module.scss';
import Button from '../Button';

interface IOrderSummaryProps {
    ingredients: IIngredients;
    handleCancel: () => void;
    handleContinue: () => void;
    price: number;
}

function OrderSummary({
    price,
    ingredients,
    handleCancel,
    handleContinue,
}: IOrderSummaryProps) {
    const renderIngredientSummary = () => {
        const ingredientSummary = [];
        for (const key in ingredients) {
            ingredientSummary.push({ type: key, value: ingredients[key] });
        }
        return ingredientSummary.map(({ type, value }) => (
            <li key={type}>
                <span className={classes.orderSummaryContainer}>{type}</span>:{' '}
                {value}
            </li>
        ));
    };

    return (
        <div>
            <h3 className={classes.title}>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul className={classes.orderIngredients}>
                {renderIngredientSummary()}
            </ul>
            <p className={classes.price}>Total Price: ${price.toFixed(2)}</p>
            <p className={classes.question}>Checkout ?</p>
            <div className={classes.buttonContainer}>
                <Button type="danger" handleClick={handleContinue}>
                    CONTINUE <i className="fas fa-box-open"></i>
                </Button>
                <Button type="cancel" handleClick={handleCancel}>
                    CANCEL <i className="fas fa-strikethrough"></i>
                </Button>
            </div>
        </div>
    );
}

export default OrderSummary;
