import React from 'react';

import classes from './navigationItems.module.scss';
import NavigationItem from './NavigationItem';

function NavigationItems() {
    return (
        <ul className={classes.navigationItemsContainer}>
            <NavigationItem route="/">Burgery Home</NavigationItem>
            <NavigationItem route="/orders">Orders</NavigationItem>
            <NavigationItem route="/register">Sign Up</NavigationItem>
            <NavigationItem route="/login">Sign In</NavigationItem>
        </ul>
    );
}

export default NavigationItems;
