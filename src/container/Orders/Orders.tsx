import React, { Component } from 'react';
import Order from '../../components/Order';
import axiosInstance from '../../services/api/axios';
import { IOrder } from '../../types/orders';
import withErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';
import { fetchOrders } from '../../redux/actions/orders';
import { IStoreState } from '../../redux/reducers';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';

interface IOrdersProps {
    orders: IOrder[];
    isLoading: boolean;
    fetchOrders: Function;
    token: string;
    userId: string;
}

class Orders extends Component<IOrdersProps> {
    componentDidMount() {
        const { token, userId } = this.props;
        this.props.fetchOrders(token, userId);
    }

    render() {
        const { orders, isLoading } = this.props;

        const renderOrders = !isLoading ? (
            orders.map(({ id, ingredients, totalPrice }) => (
                <Order key={id} ingredients={ingredients} price={totalPrice} />
            ))
        ) : (
            <Spinner />
        );
        return <div>{renderOrders}</div>;
    }
}

const mapStateToProps = (state: IStoreState) => ({
    orders: state.orders.orders,
    isLoading: state.orders.isLoading,
    token: state.auth.token,
    userId: state.auth.userId,
});

export default connect(mapStateToProps, { fetchOrders })(
    withErrorHandler<IOrdersProps>(Orders, axiosInstance)
);
