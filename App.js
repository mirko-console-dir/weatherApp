import React from 'react';
import Tabs from './src/components/Tabs';
import { NavigationContainer } from '@react-navigation/native';
/* BABEL JUST TRANSLATE TO JS */
/* react native is a components framework with root:app and other:src  */
/* The navigation system involves pushing and popping screens within a container, with two primary navigation types: stack and tab navigation. 
On Android, tabs appear at the top, while on iOS, they appear at the bottom. 
To set up material top tabs and adapt their display based on the platform, developers should use the React Native platform API and the 'ios' property to identify the user's platform. */



const App = () => {
  const message = 'Current Weather'
  return (
    <NavigationContainer>
    <Tabs/>

      {/* <View style={styles.container}>  */}
         {/*  <CurrentWeather/>  */}
          {/* <UpcomingWeather/> */}
          {/* <City/> */}
       {/*  </View> */}
    </NavigationContainer>
  );
}


/* const styles = StyleSheet.create({ 
  container: {
    flex: 1,
  },
}); */
export default App