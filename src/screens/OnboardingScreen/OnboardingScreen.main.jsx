import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { 
    View, 
    Text, 
    Dimensions,
} from 'react-native';
import { ScrollView, } from 'react-native-gesture-handler';
import Onboarding from '../../components/Onboarding';
import { styles } from "./OnboardingScreen.style";

export default function OnboardingScreen(props) {
    const { navigation } = props;
    // var deviceWidth = Dimensions.get('window').width;
    // const numScreens = 5;

    return (
        <View style={styles.container}>
            <Onboarding />
        </View>
    )
}