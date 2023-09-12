import React from 'react'
import {  StyleSheet, Text , SafeAreaView } from 'react-native';

/* city name */
/* city country */
/* population */
/* sunrise & sunset */
const City = () => {
  return (
    <SafeAreaView style={styles.container}> 
        <Text>City</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default City