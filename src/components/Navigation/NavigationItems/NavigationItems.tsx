import React, { Fragment } from 'react';

import classes from './navigationItems.module.scss';
import NavigationItem from './NavigationItem';

interface INavigationItemsProps {
    isAuthenticated: boolean;
}

function NavigationItems({ isAuthenticated }: INavigationItemsProps) {
    const renderNavigationItems = (
        <Fragment>
            <NavigationItem route="/">Burgery Home</NavigationItem>
            {isAuthenticated ? (
                <Fragment>
                    <NavigationItem route="/orders">Orders</NavigationItem>
                    <NavigationItem route="/logout">Logout</NavigationItem>
                </Fragment>
            ) : (
                <Fragment>
                    <NavigationItem route="/register">Sign Up</NavigationItem>
                    <NavigationItem route="/login">Sign In</NavigationItem>
                </Fragment>
            )}
        </Fragment>
    );
    return (
        <ul className={classes.navigationItemsContainer}>
            {renderNavigationItems}
        </ul>
    );
}

export default NavigationItems;
