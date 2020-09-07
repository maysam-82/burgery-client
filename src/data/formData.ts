import { IFormData } from '../types/orders';

export const formData: IFormData = {
    name: {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: 'test name', displayValue: 'test name' },
                { value: 'sample name', displayValue: 'sample name' },
            ],
        },
        value: 'test name',
    },
    email: {
        elementType: 'select',
        elementConfig: {
            options: [
                {
                    value: 'sample@onlysampleemail.com',
                    displayValue: 'sample@onlysampleemail.com',
                },
                {
                    value: 'test@onlysampleemail.com',
                    displayValue: 'test@onlysampleemail.com',
                },
            ],
        },
        value: 'sample@onlysampleemail.com',
    },
    street: {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: 'test street', displayValue: 'test street' },
                { value: 'sample avenue', displayValue: 'sample avenue' },
            ],
        },
        value: 'test street',
    },
    city: {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: 'test city', displayValue: 'test city' },
                { value: 'sample city', displayValue: 'sample city' },
            ],
        },
        value: 'test city',
    },
    zipCode: {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: '12345', displayValue: '12345' },
                { value: '54321', displayValue: '54321' },
            ],
        },
        value: '12345',
    },
    deliveryMethod: {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: 'fastest', displayValue: 'Fastest' },
                { value: 'cheapest', displayValue: 'Cheapest' },
            ],
        },
        value: 'fastest',
    },
};
