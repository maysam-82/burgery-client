export interface ICustomer {
    name: string;
    address: IAddress;
    email: string;
}

export interface IAddress {
    street: string;
    zipCode: string;
    city: string;
}

export interface IOrders {
    ingredients: IIngredients;
    totalPrice: number;
    customer: ICustomer;
    deliveryMethod: string;
    comments: string;
}
