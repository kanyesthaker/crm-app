import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <View style = {{flex: 1}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 50,
        textAlign: "center",
    },
    body: {
        fontSize: 25,
        textAlign: "left",
    }
});