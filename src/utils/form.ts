import { ILoginFormData } from '../types/auth';
import { IFormData } from '../types/orders';

type DataType = ILoginFormData | IFormData;

export const handleControlUpdate = <T extends DataType>(
    formData: T,
    name: string,
    value: string
): T => {
    const clonedFormData = { ...formData };
    const clonedFormElement = { ...clonedFormData[name], value };
    clonedFormData[name as keyof T] = clonedFormElement;
    return clonedFormData;
};

// validation for email address
export const validateEmail = (email: string): boolean => {
    const regexValidationTerm = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexValidationTerm.test(email);
};

// Shallow validation for password
export const validatePassword = (password: string): boolean => {
    return password.length > 5;
};
