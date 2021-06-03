import React from "react";
import { View, StyleSheet, Animated, useWindowDimensions } from "react-native";

export default OnboardingItem = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={{ flexDirection: 'row', height: 64 }}>
            {data.map((_, i) => {
                const inputRange = [(i-1)*width, i * width, (i+1)*width ];
                const dotOpacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.25, 1, 0.25],
                    extrapolate: 'clamp'
                })
                return <Animated.View style={[ styles.dot, { opacity: dotOpacity }]} key={i.toString()} />;
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    dot : {
        width: 10,
        height: 10,
        borderRadius: 5,        
        backgroundColor: '#000',
        marginHorizontal: 8,
        marginBottom: "5%",
        opacity: 0.25,
    }
});