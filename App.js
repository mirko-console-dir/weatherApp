import React from 'react';
import { StyleSheet, View} from 'react-native';
import CurrentWeather from './src/screens/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';
import City from './src/screens/City';
/* BABEL JUST TRANSLATE TO JS */
/* react native is a components framework with root:app and other:src  */
const App = () => {
  const message = 'Current Weather'
  return (
    <View style={styles.container}> 
      {/* <CurrentWeather/> */}
      {/* <UpcomingWeather/> */}
      <City/>
    </View>
  );
}


const styles = StyleSheet.create({ 
  container: {
    flex: 1,
  },

});
export default App