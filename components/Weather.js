import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'
import { useState } from 'react';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                        <Text style={styles.content}>Zip Code is {props.zipCode}</Text>
                        <Forecast {...forecastInfo}/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({  
    backdrop: {
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%'
    },
    
    Texts: {
        fontSize: 20 ,
        backgroundColor: 'black',
        color: 'white',
        /*padding: 20,
        width:'100%',*/
        textAlign: 'center'
    },

    content: {
        paddingTop : 30,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },

});
