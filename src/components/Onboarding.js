import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, FlatList, Animated, TouchableOpacity } from 'react-native';
import OnboardingItem from "./OnboardingItem"
import Paginator from "./Paginator"
import FlatListButton from "./FlatListButton"
import * as Notifications from 'expo-notifications';
import * as Contacts from 'expo-contacts';

export default Onboarding = () => {
    const [currIdx, setCurrIdx] = useState(0);
    const [nPermission, setNPermission] = useState(null);
    const [cPermission, setCPermission] = useState(null); 

    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrIdx(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

    const onClick = async () => {
        if (currIdx == "1"){
            console.log("Trying contacts permission...");
            console.log(cPermission);
            setCPermission(await Contacts.requestPermissionsAsync());
            console.log(cPermission);
        }
        else if (currIdx == "2"){
            console.log("Trying notifications permission...");
            console.log(nPermission);
            setNPermission(await Notifications.requestPermissionsAsync());
        }
        if (currIdx <= 3){
            slidesRef.current.scrollToIndex({animated: true, index: currIdx+1});
        }
    }

    const renderItem = ({ item }) => (<OnboardingItem item={item} index={currIdx} onClick={ onClick } />);

    return (
        <View style={styles.container}>
            <View style={{flex: 3}}>
                <FlatList 
                    data={slides}
                    extraData={currIdx}
                    disableVirtualization
                    initialNumToRender={5}
                    removeClippedSubviews={ false }
                    renderItem={ renderItem }
                    horizontal
                    scrollEnabled={false}
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
    },
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