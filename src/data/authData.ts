import { ILoginFormData } from '../types/auth';

export const loginFormData: ILoginFormData = {
    email: {
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'Email',
        },
        value: '',
    },
    password: {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Password',
        },
        value: '',
    },
};
