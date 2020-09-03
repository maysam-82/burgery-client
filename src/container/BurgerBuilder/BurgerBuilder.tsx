import React, { Component, Fragment } from 'react';
import axios from '../../services/api/axios-orders';
import Burger from '../../components/Burger';
import { IIngredients } from '../../types/ingredients';
import BurgerControls from '../../components/Burger/BurgerControls';
import { ingredientsPrices } from '../../fixtures/ingredients';
import { getIngredients } from '../../components/utils/burger';
import Modal from '../../components/Modal';
import OrderSummary from '../../components/OrderSummary';
import Spinner from '../../components/Spinner';
import WithErrorHandler from '../../HOC/WithErrorHandler';

import classes from './burgerBuilder.module.scss';

interface IBurgerBuilderState {
    ingredients: IIngredients;
    totalPrice: number;
    purchasable: boolean;
    isOrdered: boolean;
    isLoading: boolean;
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
            isLoading: false,
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

    handlePurchaseContinue = () => {
        const { ingredients, totalPrice } = this.state;
        this.setState({ isLoading: true });
        const order = {
            ingredients,
            totalPrice,
            customer: {
                name: 'test',
                address: {
                    street: 'test street',
                    zipCode: 'xxxxxx',
                    city: 'test city',
                },
                email: 'sample@sample.com',
            },
            deliveryMethod: 'fastest',
            comments: 'without tomato',
        };
        axios
            .post('/orders.json', order)
            .then((response) =>
                this.setState({ isLoading: false, isOrdered: false })
            )
            .catch((error) =>
                this.setState({ isLoading: false, isOrdered: false })
            );
    };
    render() {
        const {
            ingredients,
            totalPrice,
            purchasable,
            isOrdered,
            isLoading,
        } = this.state;
        const renderOrderSummary = isLoading ? (
            <Spinner />
        ) : (
            <OrderSummary
                ingredients={ingredients}
                handleCancel={this.handleCancelPurchase}
                handleContinue={this.handlePurchaseContinue}
                price={totalPrice}
            />
        );
        return (
            <Fragment>
                <Modal
                    isShown={isOrdered}
                    handleModalClose={this.handleCancelPurchase}
                >
                    {renderOrderSummary}
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

export default WithErrorHandler(BurgerBuilder, axios);
