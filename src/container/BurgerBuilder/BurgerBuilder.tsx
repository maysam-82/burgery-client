import React, { Component } from 'react';
import Burger from '../../components/Burger';

import { IIngredients } from '../../types/ingredients';

import classes from './burgerBuilder.module.scss';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import { ingredientsPrices } from '../../fixtures/ingredients';
import { getIngredients } from '../../components/utils/burger';

interface IBurgerBuilderState {
    ingredients: IIngredients;
    totalPrice: number;
    purchasable: boolean;
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
            purchasable: false,
        };
    }

    checkPurchasable() {
        this.setState({
            purchasable: getIngredients(this.state.ingredients).length > 0,
        });
    }

    handleUpdateIngredients = (type: string, isAdded: boolean) => {
        if (isAdded) {
            this.setState(
                {
                    ingredients: {
                        ...this.state.ingredients,
                        [type]: this.state.ingredients[type] + 1,
                    },
                    totalPrice: this.state.totalPrice + ingredientsPrices[type],
                },
                () => {
                    this.checkPurchasable();
                }
            );
        } else {
            if (this.state.ingredients[type] <= 0) return;
            this.setState(
                {
                    ingredients: {
                        ...this.state.ingredients,
                        [type]: this.state.ingredients[type] - 1,
                    },
                    totalPrice: this.state.totalPrice - ingredientsPrices[type],
                },
                () => {
                    this.checkPurchasable();
                }
            );
        }
    };

    render() {
        const { ingredients, totalPrice, purchasable } = this.state;
        return (
            <div className={classes.burgerBuilderContainer}>
                <Burger ingredients={ingredients} />
                <BurgerControls
                    handleUpdateIngredients={this.handleUpdateIngredients}
                    price={totalPrice}
                    purchasable={purchasable}
                />
            </div>
        );
    }
}

export default BurgerBuilder;
