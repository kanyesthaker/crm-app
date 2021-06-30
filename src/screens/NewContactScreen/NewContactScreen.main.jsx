import React, { useState, useEffect } from "react";
import { Platform, View, TextInput, Switch, Button, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
// import firebase from "../../firebase/config.js";
import * as firebase from 'firebase';   
import { StackNavigationProp } from "@react-navigation/stack";
import SegmentedControlTab from "react-native-segmented-control-tab";
// import { styles } from "./NewContactScreen.style"


export default function NewContactScreen({ navigation }) {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState();
    const [rel, setRel] = useState(0);
    const [notifSwitch, setNotifSwitch] = useState(false);
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;

    const uid = user.uid;

    const addContact = ( name, phone, rel, notifSwitch ) => {
        db.collection("contacts")
            .doc(uid)
            .collection("contactDetails")
            .doc(phone)
            .set({
                user:uid,
                name:name,
                relationship:rel,
                notifs:notifSwitch,
                photo:null,
            }, {merge: true});
    };

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('This feature requires camera permissions!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
        });
        
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const toggle = () => {
        setNotifSwitch(previousState => !previousState);
    }

    return (
        <View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button 
                    title="Pick an image from camera roll"
                    onPress={pickImage} 
                />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
            <TextInput
                onChangeText = {setName}
                value = {name}
                placeholder = "Name"
            />
            <TextInput
                onChangeText = {setPhone}
                value = {phone}
                autoCompleteType="tel"
                placeholder = "+1 (949) 836 2723"
                keyboardType = "phone-pad"
                textContentType="telephoneNumber"
            />
            <SegmentedControlTab
                values={["Work", "Friend", "Family"]}
                selectedIndex={rel}
                onTabPress={setRel}
            />
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                height:100
            }}>
                <Text>Reminders</Text>
                <Switch
                    onValueChange={toggle}
                    value={notifSwitch}
                />
            </View>
            <Button
                title="Save"
                onPress={() => {
                    addContact(name, phone, rel, notifSwitch);
                    navigation.goBack();
                }}
            />
        </View>
    );
}