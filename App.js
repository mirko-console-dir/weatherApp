import React from 'react';
import { StyleSheet, View} from 'react-native';
import CurrentWeather from './src/screens/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';
import City from './src/screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
/* BABEL JUST TRANSLATE TO JS */
/* react native is a components framework with root:app and other:src  */
/* The navigation system involves pushing and popping screens within a container, with two primary navigation types: stack and tab navigation. 
On Android, tabs appear at the top, while on iOS, they appear at the bottom. 
To set up material top tabs and adapt their display based on the platform, developers should use the React Native platform API and the 'ios' property to identify the user's platform. */

const Tab = createBottomTabNavigator()

const App = () => {
  const message = 'Current Weather'
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'grey'
    }}>      
      <Tab.Screen name={'Current'} component={CurrentWeather} options={{ 
        tabBarIcon: ({focused}) => (
          <Feather 
            name={'droplet'} 
            size={25} 
            color={focused ? 'tomato' : 'black'}/>
          )
        }}
      /> 
      <Tab.Screen name={'Upcoming'} component={UpcomingWeather} options={{ 
        tabBarIcon: ({focused}) => (
          <Feather 
            name={'clock'} 
            size={25} 
            color={focused ? 'tomato' : 'black'}/>
          )
        }}
      />  
      <Tab.Screen name={'City'} component={City} options={{ 
        tabBarIcon: ({focused}) => (
          <Feather 
            name={'home'} 
            size={25} 
            color={focused ? 'tomato' : 'black'}/>
          )
        }}
      />      
    {/* <View style={styles.container}>  */}
       {/*  <CurrentWeather/>  */}
        {/* <UpcomingWeather/> */}
        {/* <City/> */}
     {/*  </View> */}
      </Tab.Navigator>

    </NavigationContainer>
  );
}


/* const styles = StyleSheet.create({ 
  container: {
    flex: 1,
  },
}); */
export default App