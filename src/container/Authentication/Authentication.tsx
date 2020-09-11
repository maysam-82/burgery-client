import React, { Component } from 'react';
import FormControl from '../../components/FormControl/FormControl';
import Button from '../../components/Button/Button';
import { loginFormData } from '../../data/authData';
import { ILoginFormData } from '../../types/auth';
import { IInputConfig, IFormElement } from '../../types/orders';
import history from '../../history';
import {
    handleControlUpdate,
    validateEmail,
    validatePassword,
} from '../../utils/form';
import WithErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';
import { auth } from '../../redux/actions/auth';
import { IStoreState } from '../../redux/reducers';
import { connect } from 'react-redux';
import axiosAuthInstance from '../../services/api/axiosAuth';

import classes from './authentication.module.scss';
import Spinner from '../../components/Spinner/Spinner';

interface IAuthenticationState {
    formData: ILoginFormData;
}

interface ILoginFormControl {
    id: string;
    element: IFormElement<IInputConfig>;
}

interface IAuthenticationProps {
    isLoading: boolean;
    auth: Function;
    error: string;
}

class Authentication extends Component<
    IAuthenticationProps,
    IAuthenticationState
> {
    constructor(props: IAuthenticationProps) {
        super(props);

        this.state = {
            formData: loginFormData,
        };
    }

    handleChange = ({
        target: { name, value },
    }: React.ChangeEvent<HTMLInputElement>) => {
        const newFormData = handleControlUpdate<ILoginFormData>(
            this.state.formData,
            name,
            value
        );
        this.setState({ formData: newFormData });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {
            email: { value: emailValue },
            password: { value: passwordValue },
        } = this.state.formData;
        const isEmailValid = validateEmail(emailValue);
        const isPasswordValid = validatePassword(passwordValue);
        // TODO: Adding UI Toast for validation
        if (!isEmailValid) {
            console.error('Invalid Email');
            return;
        }
        if (!isPasswordValid) {
            console.error('Password length must be greater than or equal to 6');
            return;
        }
        this.props.auth(emailValue, passwordValue);
    };

    render() {
        const { formData } = this.state;
        const formControls: ILoginFormControl[] = [];
        for (const key in formData) {
            formControls.push({ id: key, element: formData[key] });
        }
        const renderForm = (
            <form onSubmit={this.handleSubmit}>
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
                                controlConfig={elementConfig as IInputConfig}
                                value={value}
                                handleInputChange={(event) =>
                                    this.handleChange(event)
                                }
                                name={id}
                            />
                        );
                    }
                )}
                <div className={classes.buttonContainer}>
                    <Button type="success">SIGN UP</Button>
                    <Button type="cancel" handleClick={() => history.push('/')}>
                        CANCEL
                    </Button>
                </div>
            </form>
        );
        return (
            <div className={classes.authContainer}>
                {this.props.isLoading ? <Spinner /> : renderForm}
            </div>
        );
    }
}

const mapStateToProps = (state: IStoreState) => ({
    isLoading: state.auth.isLoading,
    error: state.auth.error,
});

export default connect(mapStateToProps, { auth })(
    WithErrorHandler<IAuthenticationProps>(Authentication, axiosAuthInstance)
);
