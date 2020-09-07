export interface IOrder {
    [key: string]: string | IIngredients | number;
    ingredients: IIngredients;
    totalPrice: number;
    name?: string;
    street?: string;
    zipCode?: string;
    city?: string;
    email?: string;
    deliveryMethod?: string;
    id?: string;
}

export interface IIngredient {
    name: string;
    amount: number;
}

export interface IFormElement<U> {
    elementType: string;
    elementConfig: U;
    value: string;
}

export interface IFormData {
    [key: string]: IFormElement;
    name: IFormElement<ISelectConfig>;
    street: IFormElement<ISelectConfig>;
    zipCode: IFormElement<ISelectConfig>;
    city: IFormElement<ISelectConfig>;
    email: IFormElement<ISelectConfig>;
    deliveryMethod: IFormElement<ISelectConfig>;
}

export interface IInputConfig {
    type: string;
    placeholder: string;
}

export interface ISelectConfig {
    options: IOption[];
}

interface IOption {
    value: string;
    displayValue: string;
}
