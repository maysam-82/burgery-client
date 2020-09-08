import { IIngredients } from './../../types/ingredients.d';
import { updateIngredientsState } from './utils';
import { Actions, ActionTypes } from './../actions/actionTypes';

export interface IBurgerBuilder {
    ingredients: IIngredients | null;
    totalPrice: number;
    isLoading: boolean;
    purchasable: boolean;
    isOrdered: boolean;
}

const initialState: IBurgerBuilder = {
    ingredients: null,
    totalPrice: 4,
    isLoading: false,
    purchasable: false,
    isOrdered: false,
};

const burgerReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.FETCH_INGREDIENTS_START:
            return { ...state, isLoading: true };
        case ActionTypes.FETCH_INGREDIENTS_SUCCESS:
            return { ...state, isLoading: false, ingredients: action.payload };
        case ActionTypes.FETCH_INGREDIENTS_FAIL:
            return { ...state, isLoading: false, ingredients: null };

        case ActionTypes.UPDATE_INGREDIENTS:
            const { ingredients, totalPrice } = state;
            const { ingredientsType, isIncreased } = action.payload;
            return {
                ...state,
                ...updateIngredientsState(
                    ingredients as IIngredients,
                    totalPrice,
                    isIncreased,
                    ingredientsType
                ),
            };

        default:
            return state;
    }
};

export default burgerReducer;
