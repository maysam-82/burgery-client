import { ActionTypes } from './actionTypes';
import { Dispatch } from 'redux';
import { postData } from '../../services/api/axios';
import { IOrder } from '../../types/orders';
import history from '../../history';

export interface IPostOrderStart {
    type: ActionTypes.POST_ORDERS_START;
}

export interface IPostOrderFail {
    type: ActionTypes.POST_ORDERS_FAIL;
}

export interface IPostOrderSuccess {
    type: ActionTypes.POST_ORDERS_SUCCESS;
}

const postOrderStart = (): IPostOrderStart => ({
    type: ActionTypes.POST_ORDERS_START,
});

const postOrderFail = (): IPostOrderFail => ({
    type: ActionTypes.POST_ORDERS_FAIL,
});

const postOrderSuccess = (): IPostOrderSuccess => ({
    type: ActionTypes.POST_ORDERS_SUCCESS,
});

export const postOrder = (order: IOrder) => async (dispatch: Dispatch) => {
    dispatch(postOrderStart());
    try {
        const data = await postData<IOrder>('/orders.json', order);
        if (data) {
            dispatch(postOrderSuccess());
            history.replace('/');
        }
    } catch (error) {
        dispatch(postOrderFail());
    }
};
