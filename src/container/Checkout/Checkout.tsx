import React from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/CheckoutSummary';
import ContactData from '../ContactData';
import { IIngredients } from '../../types/ingredients';
import { IStoreState } from '../../redux/reducers';
import history from '../../history';

// import classes from './checkout.module.scss';

interface ICheckoutProps {
    ingredients: IIngredients | null;
    totalPrice: number;
}

function Checkout(props: ICheckoutProps & RouteComponentProps) {
    const { ingredients, totalPrice } = props;
    const handleCheckoutCancel = () => {
        history.goBack();
    };

    const handleCheckoutContinue = () => {
        // history.replace will erase the history stack completely so that back button
        // does not work after changing route.
        history.replace('/checkout/contact-data');
    };

    return (
        ingredients && (
            <div>
                <CheckoutSummary
                    ingredients={ingredients}
                    handleCheckoutCancel={handleCheckoutCancel}
                    handleCheckoutContinue={handleCheckoutContinue}
                />
                <Route
                    path={`${props.match.path}/contact-data`}
                    render={(props) => (
                        <ContactData
                            ingredients={ingredients}
                            totalPrice={totalPrice}
                            {...props}
                        />
                    )}
                />
            </div>
        )
    );
}

const mapStateToProps = (state: IStoreState) => ({
    ingredients: state.burger.ingredients,
    totalPrice: state.burger.totalPrice,
});

export default connect(mapStateToProps)(Checkout);
