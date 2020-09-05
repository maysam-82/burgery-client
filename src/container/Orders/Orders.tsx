import React, { Component } from 'react';
import Order from '../../components/Order';
import axiosInstance, { getData } from '../../services/api/axios';
import { IOrders } from '../../types/orders';
import withErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';

interface IOrdersState {
    orders: IOrders[];
    isLoading: boolean;
}

interface IServerOrders {
    [key: string]: IOrders;
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
        const { orders } = this.state;
        const renderOrders = '';
        return (
            <div>
                <Order />
                <Order />
                <Order />
                <Order />
            </div>
        );
    }
}

export default withErrorHandler<{}>(Orders, axiosInstance);
