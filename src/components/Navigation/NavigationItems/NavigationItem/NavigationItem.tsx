import React from 'react';

import classes from './navigationItem.module.scss';
import { NavLink } from 'react-router-dom';

interface INavigationItemProps {
    children: React.ReactNode;
    route: string;
}

function NavigationItem({ children, route }: INavigationItemProps) {
    return (
        <li className={classes.navigationItemContainer}>
            <NavLink to={route} exact activeClassName={classes.active}>
                {children}
            </NavLink>
        </li>
    );
}

export default NavigationItem;
