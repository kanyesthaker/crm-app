import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, useWindowDimensions, TextInput } from "react-native";
import FlatListButton from "./FlatListButton";

export default OnboardingItem = ({ item, index, onClick }) => {
    const [phoneText, onChangePhoneText] = useState(null);
    const [nameText, onChangeNameText] = useState(null);
    const { width } = useWindowDimensions();

    const inputs = (idx) => {
        switch (idx) {
            case 3:
                return 
        }
    }
    const buttons = (idx) => {
        switch (idx) {
            case 0:
                return (
                    <FlatListButton
                        name="Continue"
                        onClick = { onClick }
                        style = {styles.bottomButton}
                    />
                );
            case 3:
                return (
                    <View style={styles.container}>
                        <TextInput
                            style = {styles.input}
                            onChangeText = {onChangeNameText}
                            value = {nameText}
                            placeholder = "Kanyes Thaker"
                        />
                        <FlatListButton
                            name="Continue"
                            onClick = {() => {
                                if (nameText) {
                                    console.log(nameText);
                                    onClick();
                                }
                            }}
                            style = {styles.bottomButton}
                        />
                    </View>
                );
            case 4:
                return (
                    <View style={styles.container}>
                        <TextInput
                            style = {styles.input}
                            onChangeText = {onChangePhoneText}
                            value = {phoneText}
                            placeholder = "+1 (949) 836 2723"
                            keyboardType = "numeric"
                        />
                        <FlatListButton
                            name="Continue"
                            onClick = {() => {
                                console.log(phoneText);
                                onClick();
                            }}
                            style = {styles.bottomButton}
                        />
                    </View>
                );
            case 1:
            case 2:
                return (
                    <View style={styles.container}>
                        <FlatListButton
                            name="Skip"
                            onClick = { onClick }
                            style = {styles.topButton}
                        />
                        <FlatListButton
                            name="Enable"
                            onClick = {()=>null}
                            style={styles.bottomButton}
                        />
                    </View>
                );
        }
    }

    return (
        <View style={[styles.container, { width }]}>
            <View style = {{flex: 1}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
                { buttons( index ) }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
    title: {
        marginTop: "50%",
        fontSize: 50,
        justifyContent: "center",
        textAlign: "center",
    },
    body: {
        fontSize: 25,
        justifyContent: "center",
        textAlign: "left",
    },
    bottomButton: {
        width: 300,
        position: "absolute",
        bottom: 15,
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#c4c4c4",
        fontSize: 25,
        padding:15,
    },
    topButton : {
        width: 300,
        position: "absolute",
        bottom: 85,
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#c4c4c4",
        fontSize: 25,
        padding:15,
    },
    input: {
        fontSize: 25,
        position: "absolute",
        top: 0,
        padding:15,
        textAlign: "left",
        borderColor: "#000",
        borderWidth: 1,
        width: 300,
        alignSelf: "center",
    },
});

