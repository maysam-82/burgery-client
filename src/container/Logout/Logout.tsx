import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authLogout } from '../../redux/actions/auth';

interface ILogoutProps {
    authLogout: typeof authLogout;
}

class Logout extends Component<ILogoutProps> {
    componentDidMount() {
        this.props.authLogout();
    }

    render() {
        return <Redirect to="/login" />;
    }
}

export default connect(null, { authLogout })(Logout);
