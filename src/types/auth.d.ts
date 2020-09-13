import { IFormElement, IInputConfig } from './orders';

export interface ILoginFormData {
    [key: string]: IFormElement;
    email: IFormElement<IInputConfig>;
    password: IFormElement<IInputConfig>;
}
