import React from 'react'
import {  StyleSheet, Text , SafeAreaView, ImageBackground, StatusBar, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

/* pass an array of styles to an object to don't duplicate the styles */

/* city name */
/* city country */
/* population */
/* sunrise & sunset */
const City = () => {
  return (
    <SafeAreaView style={styles.container}> 
        <ImageBackground source={require('../../assets/city.jpg')} style={styles.imageLayout}>
            <Text style={[styles.cityName, styles.cityText]}>Foukoka</Text>
            <Text style={[styles.countryName, styles.cityText]}>Japan</Text>
            <View style={styles.populationWrapper}>
                <Feather name={'user'} size={50} color={'white'}/>
                <Text style={styles.populationText}>8000</Text>
            </View>
            <View style={styles.riseSetWrapper}>
                <Feather name={'sunrise'} size={50} color={'white'}/>
                <Text style={styles.riseSetText}>10:46:58am</Text>
                <Feather name={'sunset'} size={50} color={'white'}/>
                <Text style={styles.riseSetText}>17:28:15pm</Text>
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
        flexDirection: 'row',
        justifyContent : 'center',
        alignItems: 'center',
        marginTop: 30
    },
    populationText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 7.5,

    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }

})
export default City