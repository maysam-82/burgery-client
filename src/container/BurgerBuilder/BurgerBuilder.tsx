import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger';
import { IIngredients } from '../../types/ingredients';
import BurgerControls from '../../components/Burger/BurgerControls';
import { ingredientsPrices } from '../../fixtures/ingredients';
import { getIngredients } from '../../components/utils/burger';
import Modal from '../../components/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

import classes from './burgerBuilder.module.scss';

interface IBurgerBuilderState {
    ingredients: IIngredients;
    totalPrice: number;
    purchasable: boolean;
    isOrdered: boolean;
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
            isOrdered: false,
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

    handleOrder = () => {
        this.setState({ isOrdered: true });
    };

    handleCancelPurchase = () => {
        this.setState({ isOrdered: false });
    };

    render() {
        const { ingredients, totalPrice, purchasable, isOrdered } = this.state;
        return (
            <Fragment>
                <Modal
                    isShown={isOrdered}
                    handleModalClose={this.handleCancelPurchase}
                >
                    <OrderSummary
                        ingredients={ingredients}
                        handleCancel={this.handleCancelPurchase}
                        price={totalPrice}
                    />
                </Modal>
                <div className={classes.burgerBuilderContainer}>
                    <Burger ingredients={ingredients} />
                    <BurgerControls
                        handleUpdateIngredients={this.handleUpdateIngredients}
                        price={totalPrice}
                        purchasable={purchasable}
                        handleOrder={this.handleOrder}
                    />
                </div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;
