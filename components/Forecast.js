import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.content}>{props.main}</Text>
            <Text style={styles.content}>{props.description}</Text>
            <Text style={styles.content}>{props.temp}  ํC</Text>
        </View>
    );
   }
   
const styles = StyleSheet.create({  
    content: {
        paddingTop : 30,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },

    /*content2: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffb6c1',
        opacity:0.4,
        width: '100%',
        height: '50%',
        color: 'white'
    },*/

    Texts: {
        fontSize: 20 ,
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        textShadowColor: 'red'
    },

});
