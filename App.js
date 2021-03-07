import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/layouts/HomeScreen';
import LoginSceen from './src/components/layouts/LoginScreen';
import SignUpScreen from './src/components/layouts/SignUpScreen';
import MainMenuScreen from './src/components/layouts/MainMenuScreen';
import NewRecordScreen from './src/components/layouts/NewRecordScreen';
import CheckRecordDatePickScreen from './src/components/layouts/CheckRecordDatePickScreen';
import CheckRecordScreen from './src/components/layouts/CheckRecordScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MCC Code Test" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginSceen} />
        <Stack.Screen name='Sign Up' component={SignUpScreen} />
        <Stack.Screen name='Main Menu' component={MainMenuScreen} />
        <Stack.Screen name="New Record" component={NewRecordScreen} />
        <Stack.Screen name="Check Record" component={CheckRecordDatePickScreen} />
        <Stack.Screen name="Records" component={CheckRecordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

