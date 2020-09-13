import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Checkout from '../Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from '../Orders/Orders';
import Confirmation from '../../components/Confirmation/Confirmation';
import Authentication from '../Authentication/Authentication';
import Logout from '../Logout/Logout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import NotFound from '../../components/NotFound/NotFound';
import { authCheckState } from '../../redux/actions/auth';

import classes from './App.module.scss';

interface IAppProps {
    authCheckState: Function;
}

class App extends Component<IAppProps> {
    componentDidMount() {
        this.props.authCheckState();
    }

    render() {
        return (
            <div className={classes.appContainer}>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={BurgerBuilder} />
                        <Route path="/login" component={Authentication} />
                        <Route path="/register" component={Authentication} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/confirmation" component={Confirmation} />
                        <PrivateRoute path="/orders" component={Orders} />
                        <PrivateRoute path="/logout" component={Logout} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default connect(null, { authCheckState })(App);
