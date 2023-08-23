import {AuthActions, AuthActionTypes} from "../../types/AuthAction";
import {AuthState} from "../../types/AuthState";

export const authReducer = (state: AuthState, action: AuthActions): AuthState => {
    switch (action.type) {
        case AuthActionTypes.AUTH:
            return {loading: true, error: null, authData: {username:null, jwt:null}};
        case AuthActionTypes.AUTH_SUCCESS:
            return {loading: false, error: null, authData: action.payload};
        case AuthActionTypes.AUTH_ERROR:
            return {loading: false, error: action.payload, authData: {username:null, jwt:null}};
        default:
            return {loading: false, error: null, authData: {username:null, jwt: null}}
    }
}
