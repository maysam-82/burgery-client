import { IIngredientsPrice } from '../types/ingredients';

export const ingredientTypes = {
    BREAD_BOTTOM: 'bread-bottom',
    BREAD_TOP: 'bread-top',
    MEAT: 'meat',
    SALAD: 'salad',
    BACON: 'bacon',
    CHEESE: 'cheese',
};

export const ingredientsPrices: IIngredientsPrice = {
    salad: 0.5,
    cheese: 1,
    meat: 1.5,
    bacon: 0.7,
};
