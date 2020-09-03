import React, { Fragment } from 'react';
import classes from './layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';

interface ILayout {
    children: React.ReactNode;
}

function Layout({ children }: ILayout) {
    return (
        <Fragment>
            <Toolbar />
            <main className={classes.layoutMain}>{children}</main>
        </Fragment>
    );
}

export default Layout;
