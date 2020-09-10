import React from 'react';
import Button from '../Button/Button';
import { Redirect } from 'react-router-dom';
import history from '../../history';

import classes from './confirmation.module.scss';
import { IStoreState } from '../../redux/reducers';
import { connect } from 'react-redux';

interface IConfirmationProps {
    orderNumber: string;
}

function Confirmation({ orderNumber }: IConfirmationProps) {
    return orderNumber ? (
        <div className={classes.confirmationContainer}>
            <h4 className={classes.confirmationTitle}>
                Your order is submited.
            </h4>
            <div className={classes.confrimationNumber}>
                <p className={classes.confrimationLabel}>Your order Number</p>
                {orderNumber}
            </div>
            <div className={classes.buttonContainer}>
                <Button type="success" handleClick={() => history.replace('/')}>
                    Home
                </Button>
            </div>
        </div>
    ) : (
        <Redirect to="/" />
    );
}

const mapStateToProps = (state: IStoreState) => ({
    orderNumber: state.orders.orderNumber,
});

export default connect(mapStateToProps)(Confirmation);
