import React, { Component, Fragment } from 'react';
import axios, { getData } from '../../services/api/axios';
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
import { RouteComponentProps } from 'react-router-dom';

interface IBurgerBuilderState {
    ingredients: IIngredients | null;
    totalPrice: number;
    purchasable: boolean;
    isOrdered: boolean;
    isLoading: boolean;
}

interface IBurgerBuilderProps {}

class BurgerBuilder extends Component<
    IBurgerBuilderProps & RouteComponentProps,
    IBurgerBuilderState
> {
    constructor(props: IBurgerBuilderProps & RouteComponentProps) {
        super(props);
        this.state = {
            ingredients: null,
            totalPrice: 4,
            purchasable: false,
            isOrdered: false,
            isLoading: false,
        };
    }

    componentDidMount() {
        getData<IIngredients>('/ingredients.json').then((data) =>
            this.setState({
                ingredients: { ...this.state.ingredients, ...data },
            })
        );
    }

    checkPurchasable() {
        const { ingredients } = this.state || null;
        if (ingredients) {
            this.setState({
                purchasable: getIngredients(ingredients).length > 0,
            });
        }
    }

    handleUpdateIngredients = (type: string, isAdded: boolean) => {
        const { ingredients } = this.state || null;
        if (!ingredients) return;
        if (isAdded) {
            this.setState(
                {
                    ingredients: {
                        ...ingredients,
                        [type]: ingredients[type] + 1,
                    },
                    totalPrice: this.state.totalPrice + ingredientsPrices[type],
                },
                () => {
                    this.checkPurchasable();
                }
            );
        } else {
            if (ingredients[type] <= 0) return;
            this.setState(
                {
                    ingredients: {
                        ...ingredients,
                        [type]: ingredients[type] - 1,
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
        // const { ingredients, totalPrice } = this.state;
        // this.setState({ isLoading: true });
        // const order = {
        //     ingredients,
        //     totalPrice,
        //     customer: {
        //         name: 'test',
        //         address: {
        //             street: 'test street',
        //             zipCode: 'xxxxxx',
        //             city: 'test city',
        //         },
        //         email: 'sample@sample.com',
        //     },
        //     deliveryMethod: 'fastest',
        //     comments: 'without tomato',
        // };
        // axios
        //     .post('/orders.json', order)
        //     .then((response) =>
        //         this.setState({ isLoading: false, isOrdered: false })
        //     )
        //     .catch((error) =>
        //         this.setState({ isLoading: false, isOrdered: false })
        //     );
        this.props.history.push('/checkout');
    };

    render() {
        const {
            ingredients,
            totalPrice,
            purchasable,
            isOrdered,
            isLoading,
        } = this.state;

        const renderOrderSummary =
            isLoading || !ingredients ? (
                <Spinner />
            ) : (
                <OrderSummary
                    ingredients={ingredients}
                    handleCancel={this.handleCancelPurchase}
                    handleContinue={this.handlePurchaseContinue}
                    price={totalPrice}
                />
            );
        const renderBurger =
            isLoading || !ingredients ? (
                <Spinner />
            ) : (
                <Fragment>
                    <Burger ingredients={ingredients} />
                    <BurgerControls
                        handleUpdateIngredients={this.handleUpdateIngredients}
                        price={totalPrice}
                        purchasable={purchasable}
                        handleOrder={this.handleOrder}
                    />
                </Fragment>
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
                    {renderBurger}
                </div>
            </Fragment>
        );
    }
}

export default WithErrorHandler<IBurgerBuilderProps & RouteComponentProps>(
    BurgerBuilder,
    axios
);
