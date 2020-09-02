import React from 'react';
import { ingredientTypes } from '../../../fixtures/ingredients';

import classes from './burgerIngredient.module.scss';

interface IBurgerIngredient {
    type: string;
}

function BurgerIngredient({ type }: IBurgerIngredient) {
    let ingredient = null;
    switch (type) {
        case ingredientTypes.BREAD_BOTTOM:
            ingredient = <div className={classes.breadBottom} />;
            break;
        case ingredientTypes.BREAD_TOP:
            ingredient = (
                <div className={classes.breadTop}>
                    <div className={classes.seeds1} />
                    <div className={classes.seeds2} />
                </div>
            );
            break;
        case ingredientTypes.MEAT:
            ingredient = <div className={classes.meat} />;
            break;
        case ingredientTypes.CHEESE:
            ingredient = <div className={classes.cheese} />;
            break;
        case ingredientTypes.SALAD:
            ingredient = <div className={classes.salad} />;
            break;
        case ingredientTypes.BACON:
            ingredient = <div className={classes.bacon} />;
            break;

        default:
            ingredient = null;
            break;
    }

    return ingredient;
}

export default BurgerIngredient;
