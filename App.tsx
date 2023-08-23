import {Provider} from "react-redux";
import {store} from "./store";
import AuthScreen from "./screens/AuthScreen";

export default function App() {
    return (
        <Provider store={store}>
            <AuthScreen/>
        </Provider>
    );
}

