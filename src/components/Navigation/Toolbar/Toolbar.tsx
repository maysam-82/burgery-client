import React from 'react';

import classes from './toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

function Toolbar() {
    return (
        <header className={classes.toobalContainer}>
            <div>MENU</div>
            <div className={classes.toolbarLogo}>
                <i className="fas fa-hamburger"></i>
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;
