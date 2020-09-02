import React from 'react';
import Layout from '../Layout';
import BurgerBuilder from '../../container/BurgerBuilder';

import classes from './App.module.scss';

function App() {
    return (
        <div className={classes.appContainer}>
            <Layout>
                <BurgerBuilder />
            </Layout>
        </div>
    );
}

export default App;
