import React, { Component } from 'react';
import classes from './burgerBuilder.module.scss';

class BurgerBuilder extends Component {
    render() {
        return (
            <div className={classes.burgerBuilderContainer}>
                <div className={classes.burgerBuilderDisplay}>Burger</div>
                <div className={classes.burgerBuilderControls}>Controls</div>
            </div>
        );
    }
}

export default BurgerBuilder;
