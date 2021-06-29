import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./src/screens/LoginScreen/LoginScreen.main";
import OnboardingScreen from "./src/screens/OnboardingScreen/OnboardingScreen.main";
import FeedScreen from "./src/screens/FeedScreen/FeedScreen.main";
import NewContactScreen from './src/screens/NewContactScreen/NewContactScreen.main';

const MainStack = createStackNavigator();


function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title:'Login',
        }}
      />
      <MainStack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          title:'Onboarding',
        }}
      />
      <MainStack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
          title: 'Feed',
        }}
      />
      <MainStack.Screen
        name="NewContactScreen"
        component={NewContactScreen}
        options={{
          title:'New Contact',
        }}
      />
    </MainStack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>{ 
      MainStackScreen() 
    }</NavigationContainer>
  );
}