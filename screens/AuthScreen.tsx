import {Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useEffect, useState} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AuthScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    const inputContainerWidth = screenWidth * 0.8;
    const buttonWidth = screenWidth * 0.8;

    useEffect(() => {
        const updateWidth = () => {
            setScreenWidth(Dimensions.get('window').width);
        };

        Dimensions.addEventListener('change', updateWidth);

    }, []);

    const {authData, loading, error} = useTypedSelector(state => state.auth);
    console.log(authData, loading, error);
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{
                uri: 'https://flora24.online/images/logo.svg',
            }}/>
            <View style={[styles.inputContainer, {width: inputContainerWidth}]}>
                <Text>✉️</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder={"Email"}
                />
            </View>
            <View style={[styles.inputContainer, {width: inputContainerWidth}]}>
                <Text>🔒</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder={"Пароль"}
                />
            </View>
            <Pressable style={[styles.button, {width: buttonWidth}]} onPress={() => {
            }}>
                <Text style={styles.buttonText}>Увійти</Text>
            </Pressable>
        </View>
    )
}

export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 62,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 40,
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: 'green',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
    }
});
