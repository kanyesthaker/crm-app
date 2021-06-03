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
            {/* <StatusBar style="auto"/> */}
        </View>
    )
    // return (
    //     <View style={styles.container}>
    //         <ScrollView
    //             contentContainerStyle={{paddingRight: deviceWidth * (numScreens-1)}}
    //             horizontal={true}
    //             showsHorizontalScrollIndicator={false}
    //             pagingEnabled={true}
    //             snapToInterval={deviceWidth}
    //             snapToAlignment="center"
    //             scrollEventThrottle={200}
    //             decelerationRate="fast"
    //         >
    //             <View style={{...styles.onboardingPage, width: deviceWidth}}>
    //                 <Text style={styles.onboardingTitle}>Welcome</Text>
    //                 <Text style={styles.onboardingBody}>CRM App helps you easily stay in touch with 0 stress. We need some permissions!</Text>
    //             </View>

    //             <View style={{...styles.onboardingPage, width: deviceWidth}}>
    //                 <Text style={styles.onboardingTitle}>Contacts</Text>
    //                 <Text style={styles.onboardingBody}>Easily add people by allowing access to your contacts</Text>
    //             </View>

    //             <View style={{...styles.onboardingPage, width: deviceWidth}}>
    //                 <Text style={styles.onboardingTitle}>Notifications</Text>
    //                 <Text style={styles.onboardingBody}>Get quick reminders by allowing notifications</Text>
    //             </View>

    //             <View style={{...styles.onboardingPage, width: deviceWidth}}>
    //                 <Text style={styles.onboardingTitle}>Name</Text>
    //                 <Text style={styles.onboardingBody}>What should we call you?</Text>
    //             </View>

    //             <View style={{...styles.onboardingPage, width: deviceWidth}}>
    //                 <Text style={styles.onboardingTitle}>Phone Number</Text>
    //                 <Text style={styles.onboardingBody}>What's your phone number?</Text>
    //             </View>

    //         </ScrollView>
    //         <View
    //             style={{ flexDirection: 'row' }}
    //             >
    //             {this.state.dataSource.map((_, i) => { 
    //                 let opacity = position.interpolate({
    //                 inputRange: [i - 1, i, i + 1],
    //                 outputRange: [0.3, 1, 0.3],
    //                 extrapolate: 'clamp' 
    //                 });
    //                 return (
    //                 <Animated.View 
    //                     key={i}
    //                     style={{ opacity, height: 5, width: 5, backgroundColor: '#595959', margin: 2, borderRadius: 5 }}
    //                 />
    //                 );
    //             })}
    //         </View>
    //     </View>
    // )
}