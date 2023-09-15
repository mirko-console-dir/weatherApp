import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Feather} from '@expo/vector-icons'
import RowText from '../components/RowText';
import { weatherType } from '../utils/weatherType';


/* Temperature */
/* Feels like */
/* High and Low */
/* Description */
/* Additional text */
/* Icon & Background color */

const CurrentWeather = ({weatherData}) => {
  const messageTitle = 'Current Weather'
  const {wrapper, container, tempStyles, feels, highLowWrapper, highLow, bodyWrapper, description, message} = styles

  const { main: { temp, feels_like, temp_max, temp_min}, weather} = weatherData

  /* to acess to che correct weather type obj I need to acess to the weather condition */ 
  /* ? optional changing is gonna return undefined if some prop not exist instead an error */
  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView style={[
      wrapper, 
      { backgroundColor: weatherType[weatherCondition]?.backgroundColor}
    ]}> 
      <View style={container}>
        <Feather 
          name={weatherType[weatherCondition]?.icon} 
          size={100} 
          color={'white'}
        />
        <Text>{messageTitle}</Text>
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText 
          messageOne={`High: ${temp_max}° `} 
          messageTwo={`Low: ${temp_min}°`} 
          containerStyles={highLowWrapper} 
          messageOneStyles={highLow} 
          messageTwoStyles={highLow}
        />
        <StatusBar style="auto" />
      </View>
      <RowText 
        messageOne={weather[0]?.description} 
        messageTwo={weatherType[weatherCondition]?.message} 
        containerStyles={bodyWrapper} 
        messageOneStyles={description} 
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper : {
    backgroundColor: 'azure',
    flex: 1
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignContent: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    color: 'black',
    fontSize: 48
  },
  message: {
    color: 'black',
    fontSize: 30
  },
});
export default CurrentWeather