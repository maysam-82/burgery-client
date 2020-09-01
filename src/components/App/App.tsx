import React from 'react';
import classes from './App.module.scss';
import Layout from '../Layout';

function App() {
    return (
        <div className={classes.appContainer}>
            <Layout>
                <p>Test Layout</p>
            </Layout>
        </div>
    );
}

export default App;
