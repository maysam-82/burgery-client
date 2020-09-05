import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CheckoutSummary from '../../components/CheckoutSummary';
import { IIngredients } from '../../types/ingredients';

import classes from './checkout.module.scss';
import { getQueryParams } from '../../components/utils/burger';

interface ICheckoutState {
    ingredients: IIngredients;
}

interface ICheckoutProps {}

class Checkout extends Component<
    ICheckoutProps & RouteComponentProps,
    ICheckoutState
> {
    constructor(props: ICheckoutProps & RouteComponentProps) {
        super(props);

        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            },
        };
    }

    componentDidMount() {
        const ingredients = getQueryParams(this.props.location.search);
        this.setState({
            ingredients: { ...this.state.ingredients, ...ingredients },
        });
    }

    handleCheckoutCancel = () => {
        this.props.history.goBack();
    };

    handleCheckoutContinue = () => {
        // history.replace will erase the history stack completely so that back button
        // does not work after changing route.
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    handleCheckoutCancel={this.handleCheckoutCancel}
                    handleCheckoutContinue={this.handleCheckoutContinue}
                />
            </div>
        );
    }
}

export default Checkout;
