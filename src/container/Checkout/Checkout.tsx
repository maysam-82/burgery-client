import React, { Component } from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';
import CheckoutSummary from '../../components/CheckoutSummary';
import ContactData from '../ContactData';
import { IIngredients } from '../../types/ingredients';
import { getQueryParams } from '../../utils/burger';

import classes from './checkout.module.scss';

interface ICheckoutState {
    ingredients: IIngredients;
    totalPrice: number;
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
            totalPrice: 0,
        };
    }

    componentDidMount() {
        const { ingredients, totalPrice } = getQueryParams(
            this.props.location.search
        );
        this.setState({
            ingredients: { ...this.state.ingredients, ...ingredients },
            totalPrice,
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
        const { ingredients, totalPrice } = this.state;
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    handleCheckoutCancel={this.handleCheckoutCancel}
                    handleCheckoutContinue={this.handleCheckoutContinue}
                />
                <Route
                    path={`${this.props.match.path}/contact-data`}
                    render={(props) => (
                        <ContactData
                            ingredients={ingredients}
                            totalPrice={totalPrice}
                            {...props}
                        />
                    )}
                />
            </div>
        );
    }
}

export default Checkout;
