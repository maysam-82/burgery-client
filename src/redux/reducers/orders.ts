import { OrderActions, ActionTypes } from './../actions/actionTypes';
import { IOrder } from '../../types/orders';

export interface IOrdersState {
    orders: IOrder[];
    isLoading: boolean;
}

const initialState: IOrdersState = {
    orders: [],
    isLoading: false,
};

const orderReducer = (state = initialState, action: OrderActions) => {
    switch (action.type) {
        case ActionTypes.POST_ORDERS_START:
            return { ...state, isLoading: true };
        case ActionTypes.POST_ORDERS_SUCCESS:
            return { ...state, isLoading: false };
        case ActionTypes.POST_ORDERS_FAIL:
            return { ...state, isLoading: false };

        default:
            return state;
    }
};

export default orderReducer;
