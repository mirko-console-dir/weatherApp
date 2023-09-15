import {useState, useEffect} from 'react';
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

/* return the pieces of state we need for the component */

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])

    const fetchWeatherData = async () => {
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
            const data = await res.json()
            setWeather(data)
        } catch(err){
            setError(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
      /* to call immediatly the func set between parentesis and set other at the end*/
     (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted'){
          setError('permission to access location was dSenied')
          return
        }
        let location = await Location.getCurrentPositionAsync({})
          setLat(location.coords.latitude)
          setLon(location.coords.longitude)
          await fetchWeatherData()
      })()
    }, [lat, lon])
    return [loading, error, weather ]
    /* throw an error and test the ErrorItem return [loading, true, [] ] */
}