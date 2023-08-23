import {Text, View} from "react-native";
import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/RootStackParamList";

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Profile">
const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
    const {username, jwt} = props.route.params;
    return (
        <View>
            <Text>{username}</Text>
            <Text>{jwt}</Text>
        </View>
    )
}

export default ProfileScreen;
