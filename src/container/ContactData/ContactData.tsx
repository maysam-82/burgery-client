import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import FormControl from '../../components/FormControl';

import axios from '../../services/api/axios';
import { formData } from '../../data/formData';

import { IIngredients } from '../../types/ingredients';
import {
    IOrder,
    IFormData,
    IFormElement,
    ISelectConfig,
} from '../../types/orders';
import WithErrorHandler from '../../HOC/WithErrorHandler';
import { postOrder } from '../../redux/actions/orders';
import { IStoreState } from '../../redux/reducers';
import { handleControlUpdate } from '../../utils/form';

import classes from './contactData.module.scss';

interface IContactDataProps {
    ingredients: IIngredients | null;
    totalPrice: number;
    postOrder: Function;
    isLoading: boolean;
    token: string;
}

interface IContactDataState {
    formData: IFormData;
}

interface IFormControl {
    id: string;
    element: IFormElement<ISelectConfig>;
}

class ContactData extends Component<IContactDataProps, IContactDataState> {
    constructor(props: IContactDataProps) {
        super(props);

        this.state = {
            formData,
        };
    }

    handleSubmitOrder = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { ingredients, totalPrice } = this.props;
        const order: IOrder = {
            ingredients,
            totalPrice,
        };
        for (const key in this.state.formData) {
            order[key] = this.state.formData[key].value;
        }
        this.props.postOrder(order, this.props.token);
    };

    handleSelectChange = ({
        target: { name, value },
    }: React.ChangeEvent<HTMLSelectElement>) => {
        const newFormData = handleControlUpdate<IFormData>(
            this.state.formData,
            name,
            value
        );
        this.setState({ formData: newFormData });
    };

    render() {
        const { formData } = this.state;
        const { isLoading } = this.props;
        const formControls: IFormControl[] = [];
        for (const key in formData) {
            formControls.push({ id: key, element: formData[key] });
        }
        const renderForm = (
            <form onSubmit={this.handleSubmitOrder}>
                {formControls.map(
                    ({
                        id,
                        element: { elementConfig, elementType, value },
                    }) => {
                        return (
                            <FormControl
                                key={id}
                                label={id.toLocaleUpperCase()}
                                controlType={elementType}
                                controlConfig={elementConfig as ISelectConfig}
                                value={value}
                                handleSelectChange={this.handleSelectChange}
                                name={id}
                            />
                        );
                    }
                )}
                <div className={classes.buttonContainer}>
                    <Button type="danger">ORDER</Button>
                </div>
            </form>
        );

        return (
            <div className={classes.contactDataContainer}>
                <h4>ENTER YOUR CONTACT DATA</h4>
                {!isLoading ? renderForm : <Spinner />}
            </div>
        );
    }
}

const mapStateToProps = (state: IStoreState) => ({
    isLoading: state.orders.isLoading,
    token: state.auth.token,
});

export default connect(mapStateToProps, { postOrder })(
    WithErrorHandler<IContactDataProps>(ContactData, axios)
);
