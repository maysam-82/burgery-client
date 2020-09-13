import {
    IFetchIngredientsSuccess,
    IFetchIngredientsFail,
    IFetchIngredientsStart,
    IUpdateIngredients,
    IResetOrder,
    ISetOrder,
} from './burger';
import {
    IPostOrderStart,
    IPostOrderFail,
    IPostOrderSuccess,
    IFetchOrderFail,
    IFetchOrderSuccess,
    IFetchOrderStart,
} from './orders';
import {
    IAuthFail,
    IAuthSuccess,
    IAuthStart,
    IAuthLogout,
    IUserInfoSuccess,
} from './auth';

export enum ActionTypes {
    FETCH_INGREDIENTS_START,
    FETCH_INGREDIENTS_FAIL,
    FETCH_INGREDIENTS_SUCCESS,
    UPDATE_INGREDIENTS,
    RESET_ORDER,
    SET_ORDER,
    POST_ORDERS_START,
    POST_ORDERS_FAIL,
    POST_ORDERS_SUCCESS,
    FETCH_ORDERS_START,
    FETCH_ORDERS_FAIL,
    FETCH_ORDERS_SUCCESS,
    AUTH_START,
    AUTH_FAIL,
    AUTH_SUCCESS,
    AUTH_LOGOUT,
}

export type BurgerActions =
    | IFetchIngredientsSuccess
    | IFetchIngredientsFail
    | IFetchIngredientsStart
    | IUpdateIngredients
    | IResetOrder
    | ISetOrder;

export type OrderActions =
    | IPostOrderStart
    | IPostOrderFail
    | IPostOrderSuccess
    | IFetchOrderSuccess
    | IFetchOrderFail
    | IFetchOrderStart;

export type AuthActions =
    | IAuthFail
    | IAuthSuccess
    | IAuthStart
    | IAuthLogout
    | IUserInfoSuccess;
