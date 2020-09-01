import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import { ingredientTypes } from '../../fixtures/ingredients';
import { Iingredients } from '../../types/ingredients';

import classes from './burger.module.scss';
import { getIngredients } from './helper';

interface IBurgerProps {
    ingredients: Iingredients;
}

function Burger({ ingredients }: IBurgerProps) {
    const mappedIngredients = getIngredients(ingredients);

    const renderIngredients = mappedIngredients.map((ingredient, index) => (
        <BurgerIngredient type={ingredient} key={`${ingredient}${index}`} />
    ));

    return (
        <div className={classes.burgerContainer}>
            <BurgerIngredient type={ingredientTypes.BREAD_TOP} />
            {renderIngredients}
            <BurgerIngredient type={ingredientTypes.BREAD_BOTTOM} />
        </div>
    );
}

export default Burger;
