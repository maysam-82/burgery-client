import React from 'react';

import classes from './navigationItems.module.scss';
import NavigationItem from './NavigationItem';

function NavigationItems() {
    return (
        <ul className={classes.navigationItemsContainer}>
            <NavigationItem route="/">Burgery Home</NavigationItem>
            <NavigationItem route="/orders">Orders</NavigationItem>
            <NavigationItem route="/auth">Sign Up</NavigationItem>
        </ul>
    );
}

export default NavigationItems;
