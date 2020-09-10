import React, { Component } from 'react';
import FormControl from '../../components/FormControl/FormControl';
import Button from '../../components/Button/Button';
import { loginFormData } from '../../data/authData';
import { ILoginFormData } from '../../types/auth';
import { IInputConfig, IFormElement } from '../../types/orders';
import history from '../../history';

import classes from './authentication.module.scss';
import { handleControlUpdate } from '../../utils/form';

interface IAuthenticationState {
    formData: ILoginFormData;
}

interface ILoginFormControl {
    id: string;
    element: IFormElement<IInputConfig>;
}

class Authentication extends Component<{}, IAuthenticationState> {
    constructor(props: {}) {
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
        return <div className={classes.authContainer}>{renderForm}</div>;
    }
}

export default Authentication;
