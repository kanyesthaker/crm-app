import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./src/screens/LoginScreen/LoginScreen.main";
import OnboardingScreen from "./src/screens/OnboardingScreen/OnboardingScreen.main";
import FeedScreen from "./src/screens/FeedScreen/FeedScreen.main";
import NewContactScreen from './src/screens/NewContactScreen/NewContactScreen.main';

const LoginStack = createStackNavigator();
const FeedStack = createStackNavigator();
const RootStack = createStackNavigator();

// function LoginStackScreen() {
//   return (
//     <LoginStack.Navigator>
//       <LoginStack.Screen
//         name="LoginStackScreen"
//         component={LoginScreen}
//         options={{
//           title:'Login',
//         }}
//       />
//       <LoginStack.Screen
//         name="OnboardingScreen"
//         component={OnboardingScreen}
//         options={{
//           title:'Onboarding',
//         }}
//       />
//     </LoginStack.Navigator>
//   )
// }

function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
          title: 'Feed',
        }}
      />
      <FeedStack.Screen
        name="NewContactScreen"
        component={NewContactScreen}
        options={{
          title:'New Contact',
        }}
      />
    </FeedStack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>{ 
      FeedStackScreen() 
    }</NavigationContainer>
  );
}