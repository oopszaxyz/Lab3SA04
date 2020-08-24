import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.Texts}>
            <Text style={styles.content}>{props.main}</Text>
            <Text style={styles.content2}>{props.description}</Text>
            <Text style={styles.content}>{props.temp}  ํC</Text>
        </View>
    );
   }
   
const styles = StyleSheet.create({  
    content: {
        paddingTop : 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },

    content2: {
        paddingTop : 30,
        fontSize: 20,
        color: 'white',
    },


    Texts: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
