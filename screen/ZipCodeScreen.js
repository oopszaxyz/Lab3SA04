import React from 'react';
import { SafeAreaView, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from './slideSetting';

const availableZipItems = [
    { place: 'Hat Yai', code: '90110', background:require('../Image/hdy.jpg')},
    { place: 'Trang', code: '92000', background:require('../Image/trang.jpg')},
    { place: 'Chiang Mai', code: '50000', background:require('../Image/chiangmai.jpg')},
    { place: 'Khon Kaen', code: '40000', background:require('../Image/khonkaen.jpg')},
    { place: 'Chonburi', code: '20000', background:require('../Image/chonburi.jpg')},
    { place: 'Bangkok', code: '10600', background:require('../Image/bangkok.jpg')},
    { place: 'Satun', code: '91000', background:require('../Image/satoon.jpg')},
]

const ZipItem = ({place, code, background, navigation}) => (
    <TouchableHighlight onPress={() => 
        navigation.navigate('Weather', { zipCode: code})
    }>
        <View>
            <ImageBackground source={background} style={styles.BGimage}/>
                <Text style={styles.zipPlace}>{place}</Text>
                <Text style={styles.zipCode}>{code}</Text>
            {/* </ImageBackground> */}
        </View>
    </TouchableHighlight>
)
    
const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    
    return (
          <SafeAreaView style={styles.slideStyle}>
            <View style={styles.viewSafeArea}>
                <Carousel
                  layout={'default'}
                  data = {availableZipItems}
                  keyExtractor = {item => item.code}
                  renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}

                  scrollInterpolator={scrollInterpolator}
                  slideInterpolatedStyle={animatedStyles}

                  hasParallaxImages={true}
                  useScrollView={true}

                  sliderWidth={150}
                  itemWidth={380}
                  
                  />
            </View>
          </SafeAreaView>
 );
}

const styles = StyleSheet.create({  
    
    backdrop: {
        width: '100%',
        height: '100%'
    },

    viewSafeArea:{ 
        flex: 1, 
        flexDirection:'row', 
        justifyContent: 'center', 
    },

    slideStyle: {
        flex: 1, 
        backgroundColor:'black',
        paddingTop: 90,
        opacity: 0.9,
    },

    zipItem : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: 'rgb(400,150,100)',
        opacity:0.9,
    },

    zipPlace:{
        color:'white',
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 30,
        fontWeight: 'bold',
    },

    zipCode:{
        color:'white',
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 30,
    },

    BGimage:{
        paddingTop: 130,
        paddingLeft: 25,
        marginLeft: 50,
        marginRight: 0, 
        width:270,
        height:200,
    },
    
});
