import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/RootStackParamList";

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Profile">
const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
    const {username, jwt} = props.route.params;
    return (
        <View style={styles.container}>
            <Text>username: {username}</Text>
            <Text>token: {jwt}</Text>
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: '#fff',
    }
})
