import React from 'react';

import classes from './navigationItems.module.scss';
import NavigationItem from './NavigationItem';

function NavigationItems() {
    return (
        <ul className={classes.navigationItemsContainer}>
            <NavigationItem route="/" isActive>
                Burgery Home
            </NavigationItem>
            <NavigationItem route="/checkout">Checkout</NavigationItem>
        </ul>
    );
}

export default NavigationItems;
