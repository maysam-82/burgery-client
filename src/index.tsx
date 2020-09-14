import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './container/App';
import { reducers } from './redux/reducers';
import history from './history';

import './index.scss';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

const globalStore = createStore(
    reducers,
    // using ! to ensure composeEnhancer is not null.
    composeEnhancers!(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={globalStore}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,

    document.getElementById('root')
);
