import React from 'react'
import { SafeAreaView, StyleSheet, Text , FlatList, View, StatusBar, Image, ImageBackground} from 'react-native';
import {Feather} from '@expo/vector-icons'


/* List */
/* type of lists FlatList, SectionList, VizualizedList (not realy used, less powerfull )*/
/* FlatList standard list items (require data and renderItem), SectionList broken lists in sections (require sections and renderItem)*/
/* Data for Flatlist must be an array , Data for Section list must be an array of Objects */
/* rederlist () function to render the data items of the list */
/* keyextrachtor to take a unique id to the item */
/* ListEmptyComponent is usefull component that show something else if there is not a component for example if we are waiting for a fetching */
/* ListHeader and ListFooter */
/* Image keepinmind in react if set a size for the image is gonna store the data in the memory  */
/* Date nad time */
/* Icon */
/* Weather at the time */
const DATA = [
  {
    dt_txt : "2023-02-18 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt : "2023-02-18 15:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clouds'
      }
    ]
    
  },
  {
    dt_txt : "2023-02-18 18:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  }
];
const Item = (props) => {
  const {dt_txt, min, max, condition } = props
  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color={'white'} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}
const UpcomingWeather = () => {
  const renderItem = ({item}) => (
    <Item condition={item.weather[0].main } dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
  )
  return (
    <SafeAreaView style={styles.container}> 
    <ImageBackground source={require('../../assets/thunderstorm.jpg')} style={styles.image}>
        <Text style={{color: 'white'}}>Upcoming Weather</Text>
        {/* <Image source={require('../../assets/thunderstorm.jpg')} style={styles.image}/> */}
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item=>item.dt_txt}
          ItemSeparatorComponent={()=> <View style={{backgroundColor: 'black', height: 2}}></View>}
        />
        </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor: 'pink',
      marginTop: StatusBar.currentHeight || 0
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderWidth: 5,
      backgroundColor: 'orange'
    },
    temp: {
      color: 'white',
      fontSize: 20
    },
    time: {
      color: 'white',
      fontSize: 15
    },
    image: {
     /*  height: 100,
      width: 100 */
      flex: 1
    }
  
  });

export default UpcomingWeather