import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default FlatListButton = ({ name, style, onClick }) => {

    return (
        <TouchableOpacity
            style = {style}
            onPress = {() => { onClick(); }}
        >
            <Text>
                { name }
            </Text>
        </TouchableOpacity>
    )
}


// const styles = StyleSheet.create({
//     button : {
//         alignItems : 'center',
//         justifyContent : 'center',
//     },
// })