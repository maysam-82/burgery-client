import React from 'react';
import Layout from '../../container/Layout';
import BurgerBuilder from '../../container/BurgerBuilder';
import Checkout from '../../container/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from '../../container/Orders';
import Confirmation from '../Confirmation/Confirmation';
import Register from '../../container/Register';

import classes from './App.module.scss';

function App() {
    return (
        <div className={classes.appContainer}>
            <Layout>
                <Switch>
                    <Route path="/confirmation" component={Confirmation} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/auth" component={Register} />
                    <Route path="/" exact component={BurgerBuilder} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
