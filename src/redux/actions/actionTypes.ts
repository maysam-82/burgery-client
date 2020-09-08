import {
    IFetchIngredientsSuccess,
    IFetchIngredientsFail,
    IFetchIngredientsStart,
    IUpdateIngredients,
    ISetOrder,
} from './burger';
import { IPostOrderStart, IPostOrderFail, IPostOrderSuccess } from './orders';

export type BurgerActions =
    | IFetchIngredientsSuccess
    | IFetchIngredientsFail
    | IFetchIngredientsStart
    | IUpdateIngredients
    | ISetOrder;

export enum ActionTypes {
    FETCH_INGREDIENTS_START,
    FETCH_INGREDIENTS_FAIL,
    FETCH_INGREDIENTS_SUCCESS,
    UPDATE_INGREDIENTS,
    SET_ORDER,
    POST_ORDERS_START,
    POST_ORDERS_FAIL,
    POST_ORDERS_SUCCESS,
}

export type OrderActions = IPostOrderStart | IPostOrderFail | IPostOrderSuccess;
