import { IServerOrders } from './../../types/orders.d';
import { ActionTypes } from './actionTypes';
import { Dispatch } from 'redux';
import { postData, getData } from '../../services/api/axios';
import { IOrder } from '../../types/orders';
import history from '../../history';
import { resetOrder } from './burger';

export interface IPostOrderStart {
    type: ActionTypes.POST_ORDERS_START;
}

export interface IPostOrderFail {
    type: ActionTypes.POST_ORDERS_FAIL;
}

export interface IPostOrderSuccess {
    type: ActionTypes.POST_ORDERS_SUCCESS;
}

export interface IFetchOrderStart {
    type: ActionTypes.FETCH_ORDERS_START;
}

export interface IFetchOrderFail {
    type: ActionTypes.FETCH_ORDERS_FAIL;
}

export interface IFetchOrderSuccess {
    type: ActionTypes.FETCH_ORDERS_SUCCESS;
    payload: IServerOrders;
}

export interface IPostOrderResponse {
    name: string;
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

const fetchOrdersStart = (): IFetchOrderStart => ({
    type: ActionTypes.FETCH_ORDERS_START,
});

const fetchOrdersFail = (): IFetchOrderFail => ({
    type: ActionTypes.FETCH_ORDERS_FAIL,
});

const fetchOrdersSuccess = (orders: IServerOrders): IFetchOrderSuccess => ({
    type: ActionTypes.FETCH_ORDERS_SUCCESS,
    payload: orders,
});

export const postOrder = (order: IOrder) => async (dispatch: Dispatch) => {
    dispatch(postOrderStart());
    try {
        const data = await postData<IOrder, IPostOrderResponse>(
            '/orders.json',
            order
        );
        if (data) {
            dispatch(resetOrder());
            dispatch(postOrderSuccess());
            history.replace('/');
        }
    } catch (error) {
        dispatch(postOrderFail());
    }
};

export const fetchOrders = () => async (dispatch: Dispatch) => {
    dispatch(fetchOrdersStart());
    try {
        const orders = await getData<IServerOrders>('/orders.json');
        dispatch(fetchOrdersSuccess(orders));
    } catch (error) {
        dispatch(fetchOrdersFail());
    }
};
