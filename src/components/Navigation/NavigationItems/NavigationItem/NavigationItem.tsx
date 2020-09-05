import React from 'react';

import classes from './navigationItem.module.scss';
import { NavLink } from 'react-router-dom';

interface INavigationItemProps {
    children: React.ReactNode;
    route: string;
    isActive?: boolean;
}

function NavigationItem({ children, route, isActive }: INavigationItemProps) {
    return (
        <li className={classes.navigationItemContainer}>
            <NavLink to={route}>{children}</NavLink>
        </li>
    );
}

export default NavigationItem;
