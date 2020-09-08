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
}

class BurgerBuilder extends Component<IBurgerBuilderProps> {
    componentDidMount() {
        this.props.fetchIngredients();
    }

    handlePurchaseContinue = () => {
        history.push('/checkout');
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
                    handleCancel={() => this.props.setBurgerOrder(false)}
                    handleContinue={() => history.push('/checkout')}
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
                        handleOrder={() => this.props.setBurgerOrder(true)}
                    />
                </Fragment>
            );
        return (
            <Fragment>
                <Modal
                    isShown={isOrdered}
                    handleModalClose={() => this.props.setBurgerOrder(false)}
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
    setBurgerOrder,
})(WithErrorHandler<IBurgerBuilderProps>(BurgerBuilder, axios));
