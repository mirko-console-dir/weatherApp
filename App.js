import React from 'react';
import { View, ActivityIndicator, StyleSheet  } from 'react-native';
import Tabs from './src/components/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import ErrorItem from './src/components/ErrorItem';
import { useGetWeather } from './src/hooks/useGetWeather';

const App = () => {
  const message = 'Current Weather'
  const [loading, error, weather] = useGetWeather()
  /* console.log(loading, error, weather);
  console.log(weather); */

  if(weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      {error ? 
        (<ErrorItem/>)
        : 
        (<ActivityIndicator size={"large"} color={"blue"} />)
        }
    </View>
  )
  
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
  },
}); 
export default App