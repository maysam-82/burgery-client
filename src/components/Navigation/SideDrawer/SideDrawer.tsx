import React from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './sideDrawer.module.scss';

function SideDrawer() {
    return (
        <div className={classes.sideDrawerContainer}>
            <div className={classes.logoContainer}>
                <Logo />
                <span className={classes.logoTitle}>Sample Burgery</span>
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default SideDrawer;
