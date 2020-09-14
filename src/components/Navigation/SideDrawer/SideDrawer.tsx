import React, { Fragment } from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './sideDrawer.module.scss';
import Backdrop from '../../Backdrop/Backdrop';

interface IDrawerProps {
    onCloseDrawer: () => void;
    isDrawerShown: boolean;
    isAuthenticated: boolean;
}

function SideDrawer({
    onCloseDrawer,
    isDrawerShown,
    isAuthenticated,
}: IDrawerProps) {
    const sideDrawerClasses = [
        classes.sideDrawerContainer,
        isDrawerShown ? classes.sideDrawerOpen : classes.sideDrawerClose,
    ];

    return (
        <Fragment>
            <Backdrop isShown={isDrawerShown} handleClick={onCloseDrawer} />
            <div
                className={sideDrawerClasses.join(' ')}
                onClick={onCloseDrawer}
            >
                <div className={classes.logoContainer}>
                    <Logo />
                    <span className={classes.logoTitle}>Sample Burgery</span>
                </div>
                <nav>
                    <NavigationItems isAuthenticated={isAuthenticated} />
                </nav>
            </div>
        </Fragment>
    );
}

export default SideDrawer;
