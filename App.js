import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./src/screens/LoginScreen/LoginScreen.main";
import OnboardingScreen from "./src/screens/OnboardingScreen/OnboardingScreen.main";

const LoginStack = createStackNavigator();
const RootStack = createStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginStackScreen"
        component={LoginScreen}
        options={{
          title:'Login',
        }}
      />
      <LoginStack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          title:'Onboarding',
        }}
      />
    </LoginStack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>{
      LoginStackScreen()
    }</NavigationContainer>
  );
}