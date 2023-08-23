import {StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";


interface LogInInputProps {
    valid: boolean,
    setValid: (val: boolean) => void,
    width: number,
    value: string,
    setValue: (val: string) => void,
    img: "email" | "password"
}

const LogInInput = ({valid, setValid, value, setValue, width, img}: LogInInputProps) => {
    return (
        <View style={[styles.inputContainer, {width: width}, valid ? {} : {borderColor: "red"}]}>
            <Text>{img === "email" ? "✉️" : "🔒"}</Text>
            <TextInput
                style={styles.input}
                onChangeText={(e) => {
                    setValue(e);
                    setValid(true);
                }}
                value={value}
                placeholder={"Пароль"}
            />
        </View>
    )
}

export default LogInInput;
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        marginBottom: 16,
        maxWidth: 500,
    },
    input: {
        width: '100%',
        height: 40,
        paddingHorizontal: 8,
    },
});
