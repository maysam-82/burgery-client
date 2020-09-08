import {
    IFetchIngredientsSuccess,
    IFetchIngredientsFail,
    IFetchIngredientsStart,
    IUpdateIngredients,
} from './burger';

export type Actions =
    | IFetchIngredientsSuccess
    | IFetchIngredientsFail
    | IFetchIngredientsStart
    | IUpdateIngredients;

export enum ActionTypes {
    FETCH_INGREDIENTS_START,
    FETCH_INGREDIENTS_FAIL,
    FETCH_INGREDIENTS_SUCCESS,
    UPDATE_INGREDIENTS,
}
