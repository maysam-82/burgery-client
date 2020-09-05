import React, { Component } from 'react';
import Button from '../../components/Button';
import { postData } from '../../services/api/axios';
import { IIngredients } from '../../types/ingredients';
import { RouteComponentProps } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import classes from './contactData.module.scss';
import { IAddress, ICustomer } from '../../types/orders';

interface IContactDataProps {
    ingredients: IIngredients;
    totalPrice: number;
}

interface IContactDataState {
    name: string;
    address: IAddress;
    email: string;
    deliveryMethod: string;
    comments: string;
    isLoading: boolean;
}

interface IPostOrder {
    ingredients: IIngredients;
    totalPrice: number;
    customer: ICustomer;
    deliveryMethod: string;
    comments: string;
}

class ContactData extends Component<
    IContactDataProps & RouteComponentProps,
    IContactDataState
> {
    constructor(props: IContactDataProps & RouteComponentProps) {
        super(props);

        this.state = {
            name: 'test',
            address: {
                street: 'test street',
                zipCode: 'xxxxxx',
                city: 'test city',
            },
            email: 'sample@sample.com',
            deliveryMethod: 'fastest',
            comments: 'without tomato',
            isLoading: false,
        };
    }

    handleSubmitOrder = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        const { ingredients, totalPrice } = this.props;
        this.setState({ isLoading: true });
        const order = {
            ingredients,
            totalPrice,
            customer: {
                name: 'test',
                address: {
                    street: 'test street',
                    zipCode: 'xxxxxx',
                    city: 'test city',
                },
                email: 'sample@sample.com',
            },
            deliveryMethod: 'fastest',
            comments: 'without tomato',
        };
        postData<IPostOrder>('/orders.json', order)
            .then((response) => {
                this.setState({ isLoading: false });
                this.props.history.replace('/');
            })
            .catch((error) => this.setState({ isLoading: false }));
    };

    render() {
        const { isLoading } = this.state;
        const renderForm = isLoading ? (
            <Spinner />
        ) : (
            <form>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email" />
                <input type="text" name="street" placeholder="Street" />
                <input type="text" name="postal" placeholder="Post Code" />
                <Button type="danger" handleClick={this.handleSubmitOrder}>
                    ORDER
                </Button>
            </form>
        );
        return (
            <div className={classes.contactDataContainer}>
                <h4>Enter your contact data:</h4>
                {renderForm}
            </div>
        );
    }
}

export default ContactData;
