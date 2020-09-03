import React, { Fragment } from 'react';
import classes from './layout.module.scss';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

interface ILayout {
    children: React.ReactNode;
}

function Layout({ children }: ILayout) {
    return (
        <Fragment>
            <Toolbar />
            <SideDrawer />
            <main className={classes.layoutMain}>{children}</main>
        </Fragment>
    );
}

export default Layout;
