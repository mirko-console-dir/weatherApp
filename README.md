# Weather App - React Native

Welcome to the Weather App, a mobile application built with React Native that allows users to check the weather forecast for their location or any other location worldwide. This README will provide you with an overview of the project.

# Table of Contents

- Introduction
- About Me
- Features

# About Me
Hey there! I'm Mirko, and this project represents a significant milestone in my journey as a developer. With three years of experience in web development, I've decided to explore the exciting world of mobile app development using React Native. This Weather App is my very first React Native project, and I'm thrilled to share it with you.

As someone who previously worked primarily on web applications, diving into the world of mobile development has been both challenging and rewarding. I've learned a lot along the way and can't wait to continue improving and expanding this app.

# Features

Here are some of the key features of the Weather App:

- Current Weather: Users can check the current weather conditions for their current location or any specified location.
- 5-Day Forecast: Get a 5-day weather forecast to plan ahead.
- Location Search: Easily search for weather information in any location by city name or ZIP code.
- User-friendly Interface: An intuitive and visually appealing user interface for a seamless user experience.
- Real-time Data: Weather data is retrieved from a reliable weather API to ensure accuracy and up-to-date information.

* Because the app was created using Expo, the navigation was initially implemented using the React Navigation library. To integrate React Native Navigation, the app had to be recreated without Expo.

    npm install @react-navigation/native

    additional dependencies for expo
    
    npx expo install react-native-screens react-native-safe-area-context  

The navigation system involves pushing and popping screens within a container, with two primary navigation types: stack and tab navigation. 
On Android, tabs appear at the top, while on iOS, they appear at the bottom. 
To set up material top tabs and adapt their display based on the platform, developers should use the React Native platform API and the 'ios' property to identify the user's platform.
For this app we will show the tabs on the bottom:
     
     npm install @react-navigation/bottom-tabs