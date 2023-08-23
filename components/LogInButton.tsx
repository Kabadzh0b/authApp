import React from 'react';
import {useActions} from "../hooks/useActions";
import {Pressable, StyleSheet, Text} from "react-native";


interface ButtonProps {
    email: string,
    password: string,
    width: number,
    setValidEmail: (value: boolean) => void,
    setValidPassword: (value: boolean) => void,
}

function LogInButton({email, password, width, setValidEmail, setValidPassword}: ButtonProps) {
    const {login} = useActions();

    return (
        <Pressable style={[styles.buttonStyle, {width: width}]} onPress={(e) => {
            e.preventDefault();
            let isCorrect = true;
            if (email === "") {
                setValidEmail(false);
                isCorrect = false;
            }
            if (password === "") {
                setValidPassword(false);
                isCorrect = false;
            }
            if (isCorrect) login(email, password);
        }}>
            <Text style={styles.titleStyle}>Увійти</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'rgba(111, 202, 186, 1)',
        borderRadius: 5,
        height: 50,
        marginVertical: 10,
        maxWidth: 500,
        justifyContent: "center",
        alignItems: "center",
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 23,
    }
})

export default LogInButton;
