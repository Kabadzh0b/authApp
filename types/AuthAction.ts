import AuthResponse from "./AuthResponse";

export enum AuthActionTypes {
    AUTH = 'AUTH',
    AUTH_SUCCESS = 'AUTH_SUCCESS',
    AUTH_ERROR = 'AUTH_ERROR',
}

interface AuthAction {
    type: AuthActionTypes.AUTH;
}

interface AuthSuccessAction {
    type: AuthActionTypes.AUTH_SUCCESS;
    payload: AuthResponse;
}

interface AuthErrorAction {
    type: AuthActionTypes.AUTH_ERROR;
    payload: string;
}

export type AuthActions = AuthAction | AuthSuccessAction | AuthErrorAction;
