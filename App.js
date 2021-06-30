import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./src/screens/LoginScreen/LoginScreen.main";
import OnboardingScreen from "./src/screens/OnboardingScreen/OnboardingScreen.main";
import FeedScreen from "./src/screens/FeedScreen/FeedScreen.main";
import NewContactScreen from './src/screens/NewContactScreen/NewContactScreen.main';
import * as firebase from 'firebase';

const MainStack = createStackNavigator();

const firebaseConfig = {
  "apiKey": "AIzaSyAVaIniwrj5BzS5neyx0vGYqjkkfbs1yxo",
  "authDomain": "crm-app-105d2.firebaseapp.com",
  "projectId": "crm-app-105d2",
  "storageBucket": "crm-app-105d2.appspot.com",
  "messagingSenderId": "752343876923",
  "appId": "1:752343876923:web:2623a9ff2be1cb8bdee31e",
  "measurementId": "G-451PY78WMR"
};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}


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