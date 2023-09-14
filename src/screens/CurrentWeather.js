import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Feather} from '@expo/vector-icons'
import RowText from '../components/RowText';
/* safe area is used to allow to see our component in a safe area for all devices Mobile/Tablet */
/* Style sheet is the object offer from react native for the css */
/* Flex is used to tell how much of the screen the element is gonna fill*/
/* Font size rapresent density and indipendent pixels they don't have units */

/* Temperature */
/* Feels like */
/* High and Low */
/* Description */
/* Additional text */
/* Icon & Background color */

const CurrentWeather = () => {
  const messageTitle = 'Current Weather'
  const {wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message} = styles
  return (
    <SafeAreaView style={wrapper}> 
      <View style={container}>
        <Feather name="sun" size={100} />
        <Text>{messageTitle}</Text>
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText messageOne={'High: 8'} messageTwo={'Low: 6'} containerStyles={highLowWrapper} messageOneStyles={highLow} messageTwoStyles={highLow}/>
        <StatusBar style="auto" />
      </View>
      <RowText messageOne={"It's Sunny"} messageTwo={"It's perfect t-shirt weather"} containerStyles={bodyWrapper} messageOneStyles={description} messageTwoStyles={message}/>
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
  temp: {
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