import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../../services/api/axios';
import Burger from '../../components/Burger';
import { IStoreState } from '../../redux/reducers';
import BurgerControls from '../../components/Burger/BurgerControls';
import { getIngredients, setQueryString } from '../../utils/burger';
import Modal from '../../components/Modal';
import OrderSummary from '../../components/OrderSummary';
import Spinner from '../../components/Spinner';
import WithErrorHandler from '../../HOC/WithErrorHandler';
import {
    fetchIngredients,
    updateIngredients,
} from '../../redux/actions/burger';
import { IBurgerBuilder } from '../../redux/reducers/burger';
import history from '../../history';

import classes from './burgerBuilder.module.scss';

interface IBurgerBuilderProps {
    fetchIngredients: Function;
    updateIngredients: typeof updateIngredients;
    burger: IBurgerBuilder;
}

class BurgerBuilder extends Component<IBurgerBuilderProps> {
    componentDidMount() {
        this.props.fetchIngredients();
    }

    checkPurchasable() {
        const {
            burger: { ingredients },
        } = this.props || null;
        if (ingredients) {
            this.setState({
                purchasable: getIngredients(ingredients).length > 0,
            });
        }
    }

    handleUpdateIngredients = (type: string, isAdded: boolean) => {};

    handleOrder = () => {
        this.setState({ isOrdered: true });
    };

    handleCancelPurchase = () => {
        this.setState({ isOrdered: false });
    };

    handlePurchaseContinue = () => {
        const {
            burger: { totalPrice, ingredients },
        } = this.props;
        history.push({
            pathname: '/checkout',
            search: ingredients
                ? '?' + setQueryString(ingredients, totalPrice)
                : '',
        });
    };

    render() {
        const {
            burger: {
                ingredients,
                totalPrice,
                isLoading,
                purchasable,
                isOrdered,
            },
        } = this.props;

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
                        handleUpdateIngredients={(type, isAdded) =>
                            this.props.updateIngredients(type, isAdded)
                        }
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

const mapStateToProps = (state: IStoreState) => ({
    burger: state.burger,
});

export default connect(mapStateToProps, {
    fetchIngredients,
    updateIngredients,
})(WithErrorHandler<IBurgerBuilderProps>(BurgerBuilder, axios));
