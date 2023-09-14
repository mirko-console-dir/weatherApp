import React from 'react'
import {  StyleSheet, Text , SafeAreaView, ImageBackground, StatusBar, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';

/* pass an array of styles to an object to don't duplicate the styles */

/* city name */
/* city country */
/* population */
/* sunrise & sunset */
const City = () => {
    const {container, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper,riseSetText, imageLayout, rowLayout} = styles
  return (
    <SafeAreaView style={container}> 
        <ImageBackground source={require('../../assets/city.jpg')} style={imageLayout}>
            <Text style={[cityName, cityText]}>Foukoka</Text>
            <Text style={[countryName, cityText]}>Japan</Text>
            <View style={[populationWrapper, rowLayout]}>
                <IconText iconName={'user'} iconColor={'white'} bodyText={'8000'} bodyTextStyles={populationText}/>
            </View>
            <View style={[riseSetWrapper, rowLayout]}>
                <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'10:46:58am'} bodyTextStyles={riseSetText}/>
                <IconText iconName={'sunset'} iconColor={'white'} bodyText={'17:28:15pm'} bodyTextStyles={riseSetText}/>
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0, /* for android */
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent : 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        color: 'white',
        fontSize: 25,
        marginLeft: 7.5,
    },
    riseSetWrapper: {
        justifyContent : 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    }

})
export default City