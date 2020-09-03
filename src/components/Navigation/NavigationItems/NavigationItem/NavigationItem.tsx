import React from 'react';

import classes from './navigationItem.module.scss';

interface INavigationItemProps {
    children: React.ReactNode;
    route: string;
    isActive?: boolean;
}

function NavigationItem({ children, route, isActive }: INavigationItemProps) {
    return (
        <li className={classes.navigationItemContainer}>
            <a href={route} className={isActive ? classes.active : ''}>
                {children}
            </a>
        </li>
    );
}

export default NavigationItem;
