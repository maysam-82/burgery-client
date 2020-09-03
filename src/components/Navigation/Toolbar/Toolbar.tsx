import React from 'react';

import NavigationItems from '../NavigationItems';
import Logo from '../../Logo';
import classes from './toolbar.module.scss';

function Toolbar() {
    return (
        <header className={classes.toolbarContainer}>
            <div>MENU</div>
            <Logo />
            <nav className={classes.navDesktop}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;
