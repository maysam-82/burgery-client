import React, { Component } from 'react';
import Burger from '../../components/Burger';

import { IIngredients } from '../../types/ingredients';

import classes from './burgerBuilder.module.scss';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import { ingredientsPrices } from '../../fixtures/ingredients';

interface IBurgerBuilderState {
    ingredients: IIngredients;
    totalPrice: number;
}

class BurgerBuilder extends Component<{}, IBurgerBuilderState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            },
            totalPrice: 4,
        };
    }

    handleUpdateIngredients = (type: string, isAdded: boolean) => {
        if (isAdded) {
            this.setState({
                ingredients: {
                    ...this.state.ingredients,
                    [type]: this.state.ingredients[type] + 1,
                },
                totalPrice: this.state.totalPrice + ingredientsPrices[type],
            });
        } else {
            if (this.state.ingredients[type] <= 0) return;
            this.setState({
                ingredients: {
                    ...this.state.ingredients,
                    [type]: this.state.ingredients[type] - 1,
                },
                totalPrice: this.state.totalPrice - ingredientsPrices[type],
            });
        }
    };

    render() {
        const { ingredients, totalPrice } = this.state;
        return (
            <div className={classes.burgerBuilderContainer}>
                <Burger ingredients={ingredients} />
                <BurgerControls
                    handleUpdateIngredients={this.handleUpdateIngredients}
                    price={totalPrice}
                />
            </div>
        );
    }
}

export default BurgerBuilder;
