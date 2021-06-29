import React, { useEffect, useState } from 'react';
import { 
    View,
    ScrollView,
    Text, 
    TextInput, 
    TouchableOpacity
} from 'react-native';
import OnboardingScreen from '../OnboardingScreen/OnboardingScreen.main';
import { styles } from './LoginScreen.style';
import { firebase } from "../../firebase/config";

export default function LoginScreen(props) {
    const [phoneText, onChangePhoneText] = useState(null);
    const { navigation } = props;

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled' scrollEnabled={false}>
            <Text style={styles.title}>
                Welcome
            </Text>
            <TextInput
                style = {styles.input}
                onChangeText = {onChangePhoneText}
                value = {phoneText}
                placeholder = "+1 (949) 836 2723"
                keyboardType = "numeric"
            />
            <TouchableOpacity
                style = {styles.button}
                color = "#000"
                backgroundColor = "#c4c4c4"
            >
                <Text>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {styles.button}
                onPress = {() => navigation.navigate(OnboardingScreen)}
                color = "#000"
                backgroundColor = "#c4c4c4"
            >
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

