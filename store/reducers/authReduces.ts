import {AuthActions, AuthActionTypes} from "../../types/AuthAction";
import {AuthState} from "../../types/AuthState";

const initialState:AuthState = {
    authData: {
        username:null,
        jwt:null,
    },
    loading:false,
    error:null,
}
export const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
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
