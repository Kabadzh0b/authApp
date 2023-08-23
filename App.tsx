import {Provider} from "react-redux";
import {store} from "./store";
import AuthScreen from "./screens/AuthScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {RootStackParamList} from "./types/RootStackParamList";
import ProfileScreen from "./screens/ProfileScreen";

export default function App() {

    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={AuthScreen}/>
                    <Stack.Screen name="Profile" component={ProfileScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

