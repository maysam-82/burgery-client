import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './layout.module.scss';
import { IStoreState } from '../../redux/reducers';

interface ILayoutProps {
    children: React.ReactNode;
    isAuthenticated: boolean;
}

interface ILayoutState {
    isDrawerShown: boolean;
}

class Layout extends Component<ILayoutProps, ILayoutState> {
    constructor(props: ILayoutProps) {
        super(props);

        this.state = {
            isDrawerShown: false,
        };
    }

    handleSideDrawerClose = () => {
        this.setState({ isDrawerShown: false });
    };

    handleSideDrawerOpen = () => {
        this.setState({ isDrawerShown: true });
    };

    render() {
        const { isDrawerShown } = this.state;
        const { isAuthenticated } = this.props;
        return (
            <Fragment>
                <Toolbar
                    onMenuClick={this.handleSideDrawerOpen}
                    isAuthenticated={isAuthenticated}
                />
                <SideDrawer
                    onCloseDrawer={this.handleSideDrawerClose}
                    isDrawerShown={isDrawerShown}
                    isAuthenticated={isAuthenticated}
                />
                <main className={classes.layoutMain}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

const mapStateToProps = (state: IStoreState) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Layout);
