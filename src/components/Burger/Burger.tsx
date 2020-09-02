import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import { ingredientTypes } from '../../fixtures/ingredients';
import { IIngredients } from '../../types/ingredients';

import classes from './burger.module.scss';
import { getIngredients } from './helper';

interface IBurgerProps {
    ingredients: IIngredients;
}

function Burger({ ingredients }: IBurgerProps) {
    const mappedIngredients = getIngredients(ingredients);
    const renderIngredients =
        mappedIngredients.length > 0 ? (
            mappedIngredients.map((ingredient, index) => (
                <BurgerIngredient
                    type={ingredient}
                    key={`${ingredient}${index}`}
                />
            ))
        ) : (
            <p className={classes.noIngredients}>
                Please Start Adding Ingredients
            </p>
        );

    return (
        <div className={classes.burgerContainer}>
            <BurgerIngredient type={ingredientTypes.BREAD_TOP} />
            {renderIngredients}
            <BurgerIngredient type={ingredientTypes.BREAD_BOTTOM} />
        </div>
    );
}

export default Burger;
