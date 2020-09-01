import React, { Fragment } from 'react';
import classes from './layout.module.scss';

interface ILayout {
    children: React.ReactNode;
}

function Layout({ children }: ILayout) {
    return (
        <Fragment>
            <div className={classes.layoutContainer}>
                Toolbar, SideDrawer, BackDrop
            </div>
            <main>{children}</main>
        </Fragment>
    );
}

export default Layout;
