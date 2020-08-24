import React from 'react';
import { StatusBar, StyleSheet, FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => 
        navigation.navigate('Weather', { zipCode: code})
    }>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)
    
const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
            <StatusBar style='auto'/>
        </View>
 );
}

const styles = StyleSheet.create({  
    zipItem : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(400,150,100)',
        opacity:0.6,
    },

    zipPlace:{
        paddingLeft: 70,
        paddingTop: 20,
        paddingBottom: 30,
    },

    zipCode:{
        paddingRight : 70,
        paddingTop: 20,
        paddingBottom: 30,
    },
    
});
