import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'
import { useState,useEffect } from 'react';

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=281878fb7679aeede57f11ea3a13288f`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    cityName: json.name,
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    pressure: json.main.pressure,
                    humidity: json.main.humidity
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])


    const [forecastInfo, setForecastInfo] = useState({
        cityName: '-',
        main: '-',
        description: '-',
        temp: 0,
        pressure: 0,
        humidity: 0
    })

    return (
        <View>
            <ImageBackground source={require('../BackG.jpg')} style={styles.backdrop}>
                    <View style={styles.viewCon}>
                        <Text style={styles.content}>Zip Code is {props.zipCode}</Text>
                        <Text style={styles.content}>{forecastInfo.cityName}</Text>
                        <Forecast {...forecastInfo}/>
                    </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({  
    backdrop: {
        width: '100%',
        height: '100%'
    },

    content: {
        paddingTop : 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    viewCon: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: 0.5,
        width: '100%',
        height: '85%'
    },

});
