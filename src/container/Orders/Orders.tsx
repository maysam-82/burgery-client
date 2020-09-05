import React, { Component } from 'react';
import Order from '../../components/Order';
import axiosInstance, { getData } from '../../services/api/axios';
import { IOrder } from '../../types/orders';
import withErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';

interface IOrdersState {
    orders: IOrder[];
    isLoading: boolean;
}

interface IServerOrders {
    [key: string]: IOrder;
}

class Orders extends Component<{}, IOrdersState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            orders: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        getData<IServerOrders>('/orders.json')
            .then((response) => {
                const orders = [];
                for (const key in response) {
                    orders.push({ ...response[key], id: key });
                }
                this.setState({ orders: [...orders], isLoading: false });
            })
            .catch((error) => this.setState({ isLoading: false }));
    }

    render() {
        const { orders, isLoading } = this.state;
        const renderOrders =
            !isLoading &&
            orders.length > 0 &&
            orders.map(({ id, ingredients, totalPrice, deliveryMethod }) => (
                <Order
                    key={id}
                    ingredients={ingredients}
                    price={totalPrice}
                    deliveryMethod={deliveryMethod}
                />
            ));
        return <div>{renderOrders}</div>;
    }
}

export default withErrorHandler<{}>(Orders, axiosInstance);
