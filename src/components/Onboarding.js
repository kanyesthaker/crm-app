import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, FlatList, Animated } from 'react-native';
import OnboardingItem from "./OnboardingItem"
import Paginator from "./Paginator"

export default Onboarding = () => {
    const [currIdx, setCurrIdx] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrIdx(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

    return (
        <View style={styles.container}>
            <View style={{flex: 3}}>
                <FlatList 
                    data={slides}
                    renderItem={({ item }) => <OnboardingItem item={item}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item)=>item.id}
                    onScroll={Animated.event([{ nativeEvent : { contentOffset : { x : scrollX}}}], {
                        useNativeDriver : false,
                    })}
                    scrollEventThrottle = {32}
                    onViewableItemsChanged = { viewableItemsChanged }
                    viewabilityConfig = { viewConfig }
                    ref = {slidesRef}
                />
            </View>

            <Paginator data={slides} scrollX={scrollX}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    } 
});

const slides = [
    {
        id: '1',
        title: 'Welcome',
        body: 'CRM App helps you easily stay in touch with 0 stress. We need some permissions!',
    },
    {
        id: '2',
        title: 'Contacts',
        body: 'Easily add people by allowing access to your contacts',
    },
    {
        id: '3',
        title: 'Notifications',
        body: 'Get quick reminders by allowing notifications',
    },
    {
        id: '4',
        title: 'Name',
        body: 'What should we call you?',
    },
    {
        id: '5',
        title: 'Phone #',
        body: 'What\'s your phone number?',
    }
]