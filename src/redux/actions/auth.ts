import { ActionTypes } from './actionTypes';
import { Dispatch } from 'redux';
import { postAuthData } from '../../services/api/axiosAuth';
import history from '../../history';

export interface IAuthStart {
    type: ActionTypes.AUTH_START;
}
export interface IAuthSuccess {
    type: ActionTypes.AUTH_SUCCESS;
    payload: IAuthDataResponse;
}
export interface IAuthFail {
    type: ActionTypes.AUTH_FAIL;
    payload: string;
}

interface IAuthDataRequest {
    email: string;
    password: string;
    returnSecureToken: boolean;
}
export interface IAuthDataResponse {
    idToken: string;
    refreshToken: string;
    expiresIn: string;
    email: string;
    kind: string;
    localId: string;
    displayName?: string;
    registered?: string;
}

export const authStart = (): IAuthStart => ({
    type: ActionTypes.AUTH_START,
});
export const authSuccess = (authResponse: IAuthDataResponse): IAuthSuccess => ({
    type: ActionTypes.AUTH_SUCCESS,
    payload: authResponse,
});
export const authFail = (error: string): IAuthFail => ({
    type: ActionTypes.AUTH_FAIL,
    payload: error,
});

export const auth = (email: string, password: string, autMethod: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(authStart());
        const authData: IAuthDataRequest = {
            email,
            password,
            returnSecureToken: true,
        };
        const baseAuthUrl =
            'https://identitytoolkit.googleapis.com/v1/accounts:';
        const url =
            autMethod === 'register'
                ? `${baseAuthUrl}signUp?key=${process.env.REACT_APP_API_KEY}`
                : `${baseAuthUrl}signInWithPassword?key=${process.env.REACT_APP_API_KEY}`;

        try {
            const response = await postAuthData<
                IAuthDataRequest,
                IAuthDataResponse
            >(url, authData);
            dispatch(authSuccess(response));
            history.push('/');
        } catch (error) {
            const errorMessage = error.message;
            dispatch(authFail(errorMessage));
        }
    };
};
