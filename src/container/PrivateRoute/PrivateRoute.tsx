import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { IStoreState } from '../../redux/reducers';

interface IPrivateRouteProps {
    isAuthenticated: boolean;
    component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
    path: string;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
    isAuthenticated,
    component: Component,
    path,
}: IPrivateRouteProps) => {
    return (
        <Route
            path={path}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};

const mapStateToProps = (state: IStoreState) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
