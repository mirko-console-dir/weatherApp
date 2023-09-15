import React from 'react'
import {  StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ErrorItem = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.errorMessage}>Sorry something went wrong</Text>
        <Feather name={"frown"} size={70} color={"white"}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessage: {
        fontSize: 30,
        color: 'white',
        marginHorizontal: 15,
        textAlign: 'center'
    }

})
export default ErrorItem