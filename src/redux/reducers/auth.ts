import { ActionTypes, AuthActions } from './../actions/actionTypes';

export interface IAuthState {
    isLoading: boolean;
    isAuthenticated: boolean;
    token: string;
    error: string;
}

const initialState: IAuthState = {
    isLoading: false,
    isAuthenticated: false,
    token: '',
    error: '',
};

export const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case ActionTypes.AUTH_START:
            return { ...state, isLoading: true, error: '' };
        case ActionTypes.AUTH_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                isAuthenticated: false,
                token: '',
            };
        case ActionTypes.AUTH_SUCCESS:
            const { payload } = action;
            return {
                ...state,
                isLoading: false,
                error: '',
                token: payload.idToken,
                isAuthenticated: true,
            };

        default:
            return state;
    }
};
