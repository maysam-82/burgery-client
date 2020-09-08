import { combineReducers } from 'redux';
import burgerReducer from './burger';

import { IBurgerBuilder } from './burger';

export interface IStoreState {
    burger: IBurgerBuilder;
}

export const reducers = combineReducers<IStoreState>({
    burger: burgerReducer,
});
