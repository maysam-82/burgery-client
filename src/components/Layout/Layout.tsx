import React, { Fragment } from 'react';
import classes from './layout.module.scss';

interface ILayout {
    children: React.ReactNode;
}

function Layout({ children }: ILayout) {
    return (
        <Fragment>
            <div className={classes.layoutTop}>
                Toolbar, SideDrawer, BackDrop
            </div>
            <main className={classes.layoutMain}>{children}</main>
        </Fragment>
    );
}

export default Layout;
