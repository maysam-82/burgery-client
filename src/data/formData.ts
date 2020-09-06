import { IFormData } from '../types/orders';

export const formData: IFormData = {
    name: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your Name',
        },
        value: '',
    },
    email: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your Email',
        },
        value: '',
    },
    street: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your Street',
        },
        value: '',
    },
    city: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your City',
        },
        value: '',
    },
    zipCode: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your Post Code',
        },
        value: '',
    },
    deliveryMethod: {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: 'fastest', displayValue: 'Fastest' },
                { value: 'cheapest', displayValue: 'Cheapest' },
            ],
        },
        value: '',
    },
};
