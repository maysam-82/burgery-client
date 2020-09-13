import React from 'react';
import Layout from '../../container/Layout';
import BurgerBuilder from '../../container/BurgerBuilder';
import Checkout from '../../container/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from '../../container/Orders';
import Confirmation from '../Confirmation';
import Authentication from '../../container/Authentication';
import Logout from '../../container/Logout';
import NotFound from '../NotFound/NotFound';

import classes from './App.module.scss';

function App() {
    return (
        <div className={classes.appContainer}>
            <Layout>
                <Switch>
                    <Route path="/" exact component={BurgerBuilder} />
                    <Route path="/login" component={Authentication} />
                    <Route path="/register" component={Authentication} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/confirmation" component={Confirmation} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/register" component={Authentication} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/login" component={Authentication} />
                    <Route path="/" exact component={BurgerBuilder} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
