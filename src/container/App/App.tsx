import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { authCheckState } from '../../redux/actions/auth';

import classes from './App.module.scss';

interface IAppProps {
    authCheckState: Function;
}

const asyncCheckout = lazy(() => import('../Checkout'));
const asyncOrders = lazy(() => import('../Orders'));
const asyncAuthentication = lazy(() => import('../Authentication'));
const asyncLogout = lazy(() => import('../Logout'));
const asyncNotFound = lazy(() => import('../../components/NotFound'));
const asyncConfirmation = lazy(() => import('../../components/Confirmation'));

class App extends Component<IAppProps> {
    componentDidMount() {
        this.props.authCheckState();
    }

    render() {
        return (
            <div className={classes.appContainer}>
                <Layout>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/" exact component={BurgerBuilder} />
                            <Route
                                path="/login"
                                component={asyncAuthentication}
                            />
                            <Route
                                path="/register"
                                component={asyncAuthentication}
                            />
                            <Route path="/checkout" component={asyncCheckout} />
                            <Route
                                path="/confirmation"
                                component={asyncConfirmation}
                            />
                            <PrivateRoute
                                path="/orders"
                                component={asyncOrders}
                            />
                            <PrivateRoute
                                path="/logout"
                                component={asyncLogout}
                            />
                            <Route component={asyncNotFound} />
                        </Switch>
                    </Suspense>
                </Layout>
            </div>
        );
    }
}

export default connect(null, { authCheckState })(App);
