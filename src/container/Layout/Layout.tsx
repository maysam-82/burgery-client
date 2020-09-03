import React, { Fragment, Component } from 'react';
import classes from './layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

interface ILayoutProps {
    children: React.ReactNode;
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
        return (
            <Fragment>
                <Toolbar onMenuClick={this.handleSideDrawerOpen} />
                <SideDrawer
                    onCloseDrawer={this.handleSideDrawerClose}
                    isDrawerShown={isDrawerShown}
                />
                <main className={classes.layoutMain}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;
