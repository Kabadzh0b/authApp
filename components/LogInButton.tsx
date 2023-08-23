import React from 'react';
import {Button} from "@rneui/themed";
import {useActions} from "../hooks/useActions";
import {StyleSheet} from "react-native";


interface ButtonProps {
    email: string,
    password: string,
    width: number,
}

function LogInButton({email, password, width}: ButtonProps) {
    const {login} = useActions();

    return (
        <Button
            title="Увійти"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            containerStyle={[styles.buttonContainerStyle, {width: width}]}
            onPress={() => {
                login(email, password);
            }}>
        </Button>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'rgba(111, 202, 186, 1)',
        borderRadius: 5,
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 23
    },
    buttonContainerStyle: {
        marginHorizontal: 50,
        height: 50,
        marginVertical: 10,
        maxWidth: 500,
    }
})
export default LogInButton;
