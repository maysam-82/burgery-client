import { ActionTypes } from './actionTypes';
import { Dispatch } from 'redux';
import { getData } from '../../services/api/axios';
import { IIngredients } from '../../types/ingredients';

export interface IFetchIngredientsStart {
    type: ActionTypes.FETCH_INGREDIENTS_START;
}

export interface IFetchIngredientsFail {
    type: ActionTypes.FETCH_INGREDIENTS_FAIL;
}

export interface IFetchIngredientsSuccess {
    type: ActionTypes.FETCH_INGREDIENTS_SUCCESS;
    payload: IIngredients;
}

export interface IUpdateIngredients {
    type: ActionTypes.UPDATE_INGREDIENTS;
    payload: IUpdateIngredientsPayload;
}

export interface ISetOrder {
    type: ActionTypes.SET_ORDER;
    payload: boolean;
}

interface IUpdateIngredientsPayload {
    ingredientsType: string;
    isIncreased: boolean;
}

export interface IResetOrder {
    type: ActionTypes.RESET_ORDER;
}

const getIngredientsStart = (): IFetchIngredientsStart => ({
    type: ActionTypes.FETCH_INGREDIENTS_START,
});

const getIngredientsFail = (): IFetchIngredientsFail => ({
    type: ActionTypes.FETCH_INGREDIENTS_FAIL,
});

const getIngredientsSuccess = (
    ingredients: IIngredients
): IFetchIngredientsSuccess => ({
    type: ActionTypes.FETCH_INGREDIENTS_SUCCESS,
    payload: ingredients,
});

export const fetchIngredients = () => async (dispatch: Dispatch) => {
    dispatch(getIngredientsStart());
    try {
        const ingredients = await getData<IIngredients>('/ingredients.json');
        dispatch(getIngredientsSuccess(ingredients));
    } catch (error) {
        dispatch(getIngredientsFail());
    }
};

export const updateIngredients = (
    ingredientsType: string,
    isIncreased: boolean
): IUpdateIngredients => ({
    type: ActionTypes.UPDATE_INGREDIENTS,
    payload: { ingredientsType, isIncreased },
});

export const setBurgerOrder = (hasOrder: boolean): ISetOrder => ({
    type: ActionTypes.SET_ORDER,
    payload: hasOrder,
});

export const resetOrder = (): IResetOrder => ({
    type: ActionTypes.RESET_ORDER,
});
