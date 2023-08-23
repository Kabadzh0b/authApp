import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/RootStackParamList";
import LogInButton from "../components/LogInButton";
import LogInInput from "../components/LogInInput";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">
const AuthScreen: React.FC<HomeScreenProps> = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
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
    if (authData.username !== null && authData.jwt !== null) {
        props.navigation.push("Profile", {
            username: authData.username,
            jwt: authData.jwt,
        });
        authData.username = null;
        authData.jwt = null;
    }

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loading}>Loading</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{
                uri: 'https://flora24.online/images/logo.svg',
            }}/>
            <LogInInput valid={validEmail} setValid={setValidEmail} width={inputContainerWidth} value={email}
                        setValue={setEmail} img={"email"}/>
            <LogInInput valid={validPassword} setValid={setValidPassword} width={inputContainerWidth} value={password}
                        setValue={setPassword} img={"password"}/>
            <Text style={error ? styles.warning : {display: "none"}}>Щось пішло не так...</Text>
            <LogInButton email={email} password={password} width={buttonWidth} setValidEmail={setValidEmail}
                         setValidPassword={setValidPassword}/>
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
    warning: {
        color: "red",
    },
    loading: {
        fontSize:50,
    }
});
