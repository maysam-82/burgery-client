import React, { Component } from 'react';
import Burger from '../../components/Burger';

import { Iingredients } from '../../types/ingredients';

import classes from './burgerBuilder.module.scss';

interface IBurgerBuilderState {
    ingredients: Iingredients;
}

class BurgerBuilder extends Component<{}, IBurgerBuilderState> {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,
        },
    };

    render() {
        const { ingredients } = this.state;
        return (
            <div className={classes.burgerBuilderContainer}>
                <div className={classes.burgerBuilderDisplay}>
                    <Burger ingredients={ingredients} />
                </div>
                <div className={classes.burgerBuilderControls}>Controls</div>
            </div>
        );
    }
}

export default BurgerBuilder;
