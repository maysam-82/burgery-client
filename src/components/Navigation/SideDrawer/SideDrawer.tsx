import React, { Fragment } from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './sideDrawer.module.scss';
import Backdrop from '../../Backdrop/Backdrop';

interface IDrawerProps {
    onCloseDrawer: () => void;
    isDrawerShown: boolean;
}

function SideDrawer({ onCloseDrawer, isDrawerShown }: IDrawerProps) {
    const sideDrawerClasses = [
        classes.sideDrawerContainer,
        isDrawerShown ? classes.sideDrawerOpen : classes.sideDrawerClose,
    ];

    return (
        <Fragment>
            <Backdrop isShown={isDrawerShown} handleClick={onCloseDrawer} />
            <div className={sideDrawerClasses.join(' ')}>
                <div className={classes.logoContainer}>
                    <Logo />
                    <span className={classes.logoTitle}>Sample Burgery</span>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    );
}

export default SideDrawer;
