import React from 'react';
import Layout from '../../container/Layout';
import BurgerBuilder from '../../container/BurgerBuilder';
import Checkout from '../../container/Checkout';
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.scss';

function App() {
    return (
        <div className={classes.appContainer}>
            <Layout>
                <Switch>
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/" exact component={BurgerBuilder} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
