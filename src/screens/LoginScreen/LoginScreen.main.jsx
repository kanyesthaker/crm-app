import React, { useEffect, useState, useRef } from 'react';
import { 
    View,
    ScrollView,
    Text, 
    TextInput, 
    TouchableOpacity,
    Button,
    StyleSheet,
} from 'react-native';
import OnboardingScreen from '../OnboardingScreen/OnboardingScreen.main';
import { styles } from './LoginScreen.style';
import { firebase } from "../../firebase/config";
import FeedScreen from '../FeedScreen/FeedScreen.main';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';

export default function LoginScreen(props) {
    const [phoneText, onChangePhoneText] = useState(null);
    const [verificationId, setVerificationId] = useState();
    const [verificationCode, setVerificationCode] = useState();
    const { navigation } = props;
    const firebaseConfig = firebase.apps.length? firebase.app().options : undefined;
    const recaptchaVerifier = useRef(null);
    const [message, showMessage] = React.useState(
        !firebaseConfig || Platform.OS === 'web'
          ? {
              text:
                'To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device.',
            }
          : undefined
      );

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled' scrollEnabled={false}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
                attemptInvisibleVerification={true}
            />
            <Text style={styles.title}>
                Welcome
            </Text>
            <TextInput
                style = {styles.input}
                onChangeText = {onChangePhoneText}
                value = {phoneText}
                autoCompleteType="tel"
                placeholder = "+1 (949) 836 2723"
                keyboardType = "phone-pad"
                textContentType="telephoneNumber"
            />
            <TouchableOpacity
                style = {styles.button}
                disabled = {!phoneText}
                color = "#000"
                backgroundColor = "#c4c4c4"
                onPress = {async ()=>{
                    try {
                        const phoneProvider = new firebase.auth.PhoneAuthProvider();
                        const verificationId = await phoneProvider.verifyPhoneNumber(
                            phoneText,
                            recaptchaVerifier.current
                        );
                        setVerificationId(verificationId);
                        console.log(verificationId);
                        showMessage({
                            text: 'Verification code sent to your phone',
                        });
                    } catch (err) {
                        showMessage({ text: `Error: ${err.message}`, color: 'red'})
                    }
                }}
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
            <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
            <TextInput
                style={{ marginVertical: 10, fontSize: 17 }}
                editable={!!verificationId}
                placeholder="123456"
                onChangeText={setVerificationCode}
                keyboardType="numeric"
            />
            <Button
                title="Confirm Verification Code"
                disabled={!verificationId}
                onPress={async () => {
                    try {
                        const credential = firebase.auth.PhoneAuthProvider.credential(
                        verificationId,
                        verificationCode
                        );
                        await firebase.auth().signInWithCredential(credential);
                        showMessage({ text: 'Phone authentication successful 👍' });
                        navigation.navigate(FeedScreen);
                    } catch (err) {
                        showMessage({ text: `Error: ${err.message}`, color: 'red' });
                    }
                }}
            />
            {message ? (
                <TouchableOpacity
                style={[
                    StyleSheet.absoluteFill,
                    { backgroundColor: 0xffffffee, justifyContent: 'center' },
                ]}
                onPress={() => showMessage(undefined)}>
                <Text
                    style={{
                    color: message.color || 'blue',
                    fontSize: 17,
                    textAlign: 'center',
                    margin: 20,
                    }}>
                    {message.text}
                </Text>
                </TouchableOpacity>
            ) : (
                undefined
            )}
            {<FirebaseRecaptchaBanner />}
        </ScrollView>
    )
}

