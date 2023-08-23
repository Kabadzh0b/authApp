import {Dispatch} from "redux";
import {AuthActions, AuthActionTypes} from "../../types/AuthAction";

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthActions>) => {
        try {
            dispatch({type: AuthActionTypes.AUTH});
        } catch (e) {

        }
    }
}
