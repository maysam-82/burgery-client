import React from 'react';
import classes from './order.module.scss';
import { IIngredients } from '../../types/ingredients';
import { getIngredientsArray } from '../../utils/burger';

interface IOrderProps {
    ingredients: IIngredients;
    price: number;
}

function Order({ ingredients, price }: IOrderProps) {
    const ingredientsArray = getIngredientsArray(ingredients);
    const renderIngredients = ingredientsArray.map(({ name, amount }) => (
        <span key={name} className={classes.ingredientContainer}>
            {name} ({amount})
        </span>
    ));
    return (
        <div className={classes.orderContainer}>
            Ingredients:
            {renderIngredients}
            <p>
                Price <strong>$ {price}</strong>
            </p>
        </div>
    );
}

export default Order;
