import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Feather} from '@expo/vector-icons'
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

const App = () => {
  const message = 'Current Weather'
  return (
    <SafeAreaView style={styles.wrapper}> 
      <View style={styles.container}>
      <Feather name="sun" size={100} />
        <Text>{message}</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>Hight: 8 </Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
        <StatusBar style="auto" />
      </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>It's Sunny </Text>
          <Text style={styles.message}>It's perfect t-shirt weather</Text>
        </View>
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
export default App