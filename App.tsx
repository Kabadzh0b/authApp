import {Provider} from "react-redux";
import {store} from "./store";
import AuthScreen from "./screens/AuthScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={AuthScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

