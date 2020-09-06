import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import FormControl from '../../components/FormControl';

import { postData } from '../../services/api/axios';
import { formData } from '../../data/formData';

import { IIngredients } from '../../types/ingredients';
import {
    IOrder,
    IFormData,
    IInputConfig,
    IFormElement,
    ISelectConfig,
} from '../../types/orders';

import classes from './contactData.module.scss';

interface IContactDataProps {
    ingredients: IIngredients;
    totalPrice: number;
}

interface IContactDataState {
    formData: IFormData;
    isLoading: boolean;
}

interface IFormControl {
    id: string;
    element: IFormElement<IInputConfig | ISelectConfig>;
}

class ContactData extends Component<
    IContactDataProps & RouteComponentProps,
    IContactDataState
> {
    constructor(props: IContactDataProps & RouteComponentProps) {
        super(props);

        this.state = {
            formData,
            isLoading: false,
        };
    }

    handleSubmitOrder = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { ingredients, totalPrice } = this.props;
        this.setState({ isLoading: true });
        const order: IOrder = {
            ingredients,
            totalPrice,
        };
        for (const key in this.state.formData) {
            order[key] = this.state.formData[key].value;
        }
        postData<IOrder>('/orders.json', order)
            .then((response) => {
                this.setState({ isLoading: false });
                this.props.history.replace('/');
            })
            .catch((error) => this.setState({ isLoading: false }));
    };

    handleInputChange = ({
        target: { name, value },
    }: React.ChangeEvent<HTMLInputElement>) => {
        this.handleControlUpdate(name, value);
    };
    handleSelectChange = ({
        target: { name, value },
    }: React.ChangeEvent<HTMLSelectElement>) => {
        this.handleControlUpdate(name, value);
    };

    handleControlUpdate = (name: string, value: string) => {
        const clonedFormData = { ...this.state.formData };
        const clonedFormElement = { ...clonedFormData[name] };
        clonedFormElement.value = value;
        clonedFormData[name] = clonedFormElement;
        this.setState({ formData: clonedFormData });
    };

    render() {
        const { isLoading, formData } = this.state;
        const formControls: IFormControl[] = [];
        for (const key in formData) {
            formControls.push({ id: key, element: formData[key] });
        }
        const renderForm = isLoading ? (
            <Spinner />
        ) : (
            <form onSubmit={this.handleSubmitOrder}>
                {formControls.map(
                    ({
                        id,
                        element: { elementConfig, elementType, value },
                    }) => {
                        if (id !== 'deliveryMethod') {
                            return (
                                <FormControl
                                    key={id}
                                    label={id.toLocaleUpperCase()}
                                    controlType={elementType}
                                    controlConfig={
                                        elementConfig as IInputConfig
                                    }
                                    value={value}
                                    handleInputChange={this.handleInputChange}
                                    name={id}
                                />
                            );
                        } else {
                            return (
                                <FormControl
                                    key={id}
                                    label={id.toLocaleUpperCase()}
                                    controlType={elementType}
                                    controlConfig={
                                        elementConfig as ISelectConfig
                                    }
                                    value={value}
                                    handleSelectChange={this.handleSelectChange}
                                    name={id}
                                />
                            );
                        }
                    }
                )}

                <Button type="danger">ORDER</Button>
            </form>
        );
        return (
            <div className={classes.contactDataContainer}>
                <h4>ENTER YOUR CONTACT DATA</h4>
                {renderForm}
            </div>
        );
    }
}

export default ContactData;
