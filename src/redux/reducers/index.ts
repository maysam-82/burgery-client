import { IAuthState, authReducer } from './auth';
import { combineReducers } from 'redux';
import burgerReducer from './burger';
import orderReducer from './orders';

import { IBurgerBuilder } from './burger';
import { IOrdersState } from './orders';
export interface IStoreState {
    burger: IBurgerBuilder;
    orders: IOrdersState;
    auth: IAuthState;
}

export const reducers = combineReducers<IStoreState>({
    burger: burgerReducer,
    orders: orderReducer,
    auth: authReducer,
});
