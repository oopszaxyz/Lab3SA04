import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen options={{ headerStyle: {backgroundColor : "rgb(255, 118, 56)" } , headerTintColor: 'white' }} name="HOME" component={ZipCodeScreen}/>
        <Stack.Screen  options={{ headerStyle: {backgroundColor : "black" } , headerTintColor: 'rgb(176, 228, 254)' }} name="Weather" component={WeatherScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
 }
