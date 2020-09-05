import React from 'react';
import Layout from '../../container/Layout';
import BurgerBuilder from '../../container/BurgerBuilder';
import Checkout from '../../container/Checkout';

import classes from './App.module.scss';

function App() {
    return (
        <div className={classes.appContainer}>
            <Layout>
                <BurgerBuilder />
                <Checkout />
            </Layout>
        </div>
    );
}

export default App;
