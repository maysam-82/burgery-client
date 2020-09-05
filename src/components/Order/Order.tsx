import React from 'react';
import classes from './order.module.scss';

interface IOrderProps {}

function Order() {
    return (
        <div className={classes.orderContainer}>
            <p>Ingredients: Salad (1)</p>
            <p>
                Price <strong>$ 5.00</strong>
            </p>
        </div>
    );
}

export default Order;
