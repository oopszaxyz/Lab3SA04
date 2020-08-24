import React from 'react';
import { SafeAreaView, ImageBackground, StatusBar, StyleSheet, FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from './slideSetting';

const availableZipItems = [
    { place: 'Hatyai', code: '90110', background:require('../Image/hdy.jpg')},
    { place: 'Trang', code: '92000', background:require('../Image/trang.jpg')},
    { place: 'Chiangmai', code: '50000', background:require('../Image/chiengmai.jpg')},
    { place: 'Khonkaen', code: '40000', background:require('../Image/khonkaen.jpg')},
    { place: 'Chonburi', code: '20000', background:require('../Image/chonburi.jpg')},
    { place: 'Bangkok', code: '10600', background:require('../Image/bangkok.jpg')},
    { place: 'Satoon', code: '91000', background:require('../Image/satoon.jpg')},
]

const ZipItem = ({place, code, background, navigation}) => (
    <TouchableHighlight onPress={() => 
        navigation.navigate('Weather', { zipCode: code})
    }>
        <View style={styles.zipItem}>
            <ImageBackground source={background} style={styles.zipItem}>
                <Text style={styles.zipPlace}>{place}</Text>
                <Text style={styles.zipCode}>{code}</Text>
            </ImageBackground>
        </View>
    </TouchableHighlight>
)
    
const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <SafeAreaView style={styles.slideStyle}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={'stack'} layoutCardOffset={`18`}
                  data = {availableZipItems}
                  keyExtractor = {item => item.code}
                  renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}

                  scrollInterpolator={scrollInterpolator}
                  slideInterpolatedStyle={animatedStyles}

                  hasParallaxImages={true}
                  useScrollView={true}

                  sliderWidth={200}
                  itemWidth={310}
                  />
            </View>
          </SafeAreaView>
        </View>
 );
}

const styles = StyleSheet.create({  
    backdrop: {
        width: '100%',
        height: '100%'
    },

    slideStyle: {
        flex: 1, 
        backgroundColor:'#000033',
        paddingTop: 130,
    },

    zipItem : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: 'rgb(400,150,100)',
        opacity:0.9,
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
