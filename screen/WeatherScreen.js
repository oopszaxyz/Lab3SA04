import React from 'react';
import { StatusBar, View } from 'react-native';
import Weather from '../components/Weather';

export default function WeatherScreen({route}) {
    return (
    <View>
        <Weather zipCode={route.params.zipCode} />
    <StatusBar style="auto" />
    </View>
    );
}
