import React, { Component } from 'react';
import CheckoutSummary from '../../components/CheckoutSummary';
import { IIngredients } from '../../types/ingredients';

import classes from './checkout.module.scss';

interface ICheckoutState {
    ingredients: IIngredients;
}

class Checkout extends Component<{}, ICheckoutState> {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1,
        },
    };
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} />
            </div>
        );
    }
}

export default Checkout;
