import { combineReducers } from 'redux';
import burgerReducer from './burger';
import orderReducer from './orders';

import { IBurgerBuilder } from './burger';
import { IOrdersState } from './orders';
export interface IStoreState {
    burger: IBurgerBuilder;
    orders: IOrdersState;
}

export const reducers = combineReducers<IStoreState>({
    burger: burgerReducer,
    orders: orderReducer,
});
