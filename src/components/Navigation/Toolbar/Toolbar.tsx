import React from 'react';

import NavigationItems from '../NavigationItems';
import Logo from '../../Logo';
import classes from './toolbar.module.scss';

interface IToolbarProps {
    onMenuClick: () => void;
}

function Toolbar({ onMenuClick }: IToolbarProps) {
    return (
        <header className={classes.toolbarContainer}>
            <div className={classes.menuContainer} onClick={onMenuClick}>
                <i className="fas fa-bars"></i>
            </div>
            <div className={classes.toolbarLogoContainer}>
                <Logo />
            </div>
            <nav className={classes.navDesktop}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;
