import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../../services/api/axios';
import Burger from '../../components/Burger';
import { IStoreState } from '../../redux/reducers';
import BurgerControls from '../../components/Burger/BurgerControls';
import Modal from '../../components/Modal';
import OrderSummary from '../../components/OrderSummary';
import Spinner from '../../components/Spinner';
import WithErrorHandler from '../../HOC/WithErrorHandler';
import {
    fetchIngredients,
    updateIngredients,
    setBurgerOrder,
} from '../../redux/actions/burger';
import { IBurgerBuilder } from '../../redux/reducers/burger';
import history from '../../history';

import classes from './burgerBuilder.module.scss';

interface IBurgerBuilderProps {
    fetchIngredients: Function;
    updateIngredients: typeof updateIngredients;
    setBurgerOrder: typeof setBurgerOrder;
    burger: IBurgerBuilder;
    isAuthenticated: boolean;
}

class BurgerBuilder extends Component<IBurgerBuilderProps> {
    componentDidMount() {
        if (!this.props.burger.ingredients) {
            this.props.fetchIngredients();
        }
    }

    handlePurchaseContinue = () => {
        this.props.setBurgerOrder(false);
        history.push('/checkout');
    };

    handleOrderNow = (hasOrder: boolean) => {
        if (this.props.isAuthenticated) {
            this.props.setBurgerOrder(hasOrder);
        } else {
            history.push('/login');
        }
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
            isAuthenticated,
        } = this.props;
        const renderOrderSummary =
            isLoading || !ingredients ? (
                <Spinner />
            ) : (
                <OrderSummary
                    ingredients={ingredients}
                    handleCancel={() => this.handleOrderNow(false)}
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
                        handleOrder={() => this.handleOrderNow(true)}
                        isAuthenticated={isAuthenticated}
                    />
                </Fragment>
            );
        return (
            <Fragment>
                <Modal
                    isShown={isOrdered}
                    handleModalClose={() => this.handleOrderNow(false)}
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
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
    fetchIngredients,
    updateIngredients,
    setBurgerOrder,
})(WithErrorHandler<IBurgerBuilderProps>(BurgerBuilder, axios));
