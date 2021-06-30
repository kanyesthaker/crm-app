import React, { useState, useRef } from 'react';
import { 
    StyleSheet,
    View,
    Image,
    Text
 } from "react-native";

export const FeedCell = ({ feedItem }) => {
    return (
        <View style={styles.feedCell}>
            {/* <View style={styles.feedCellImageContainer}>
                <Image
                    style={styles.feedCellImage}
                    source={{uri: feedItem.imageurl}}
                />
            </View> */}
            <View style={styles.feedCellTextContainer}>
                <Text style={styles.feedCellName}>
                    {feedItem.name}
                </Text>
                
                <Text style={styles.feedCellDescription}>
                    {feedItem.relationship}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    feedCell: {
        padding: 20,
        flexDirection: "row",
        marginVertical: 8,
        marginHorizontal: 16,
    },
    feedCellName: {
        fontSize: 25
    },
    feedCellDescription: {
        fontSize: 14
    },
    feedCellImageContainer: {
        height: 80,
        width: 54,
    },
    feedCellImage: {
        height: 80,
        width: 54,
        resizeMode: "contain"
    },
    feedCellTextContainer: {
        flex: 1,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "baseline",
    }
});