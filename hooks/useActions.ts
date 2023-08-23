import {bindActionCreators} from "redux";
import {useDispatch} from "react-redux";
import * as login from "../store/action-creators/login";
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(login, dispatch);
}
