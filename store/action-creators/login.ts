import {Dispatch} from "redux";
import {AuthActions, AuthActionTypes} from "../../types/AuthAction";
import axios from "axios";

const USERS_URL = 'https://my-json-server.typicode.com/Kabadzh0b/authApp/users';
export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthActions>) => {
        try {
            dispatch({type: AuthActionTypes.AUTH});
            const userList = await axios.get(USERS_URL);
            let userFounded: boolean = false;
            for (const user of userList.data) {
                if (user.email === email) {
                    if (user.password === password) {
                        dispatch({
                            type: AuthActionTypes.AUTH_SUCCESS,
                            payload: {username: user.username, jwt: user.jwt}
                        });
                        userFounded = true;
                        break;
                    } else {
                        throw new Error("Невірний пароль");
                    }
                }
            }
            if (!userFounded) throw new Error("Невірний email");

        } catch (e) {
            const errorMessage = e as string;
            dispatch({type: AuthActionTypes.AUTH_ERROR, payload: errorMessage});
        }
    }
}
