# Weather App - React Native

Welcome to the Weather App, a mobile application built with React Native that allows users to check the weather forecast for their location or any other location worldwide. This README will provide you with an overview of the project.

# Table of Contents

- Introduction
- About Me
- Features
- Documentation

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

* Formatting DAY text
    Library moment.js
    npm install moment --save

# Some Documentation about React-native and React 

 **Babel for JavaScript Translation**

   Babel is a tool used to translate JavaScript code. It helps ensure compatibility with different environments and browsers.

 **Understanding React Native**

   React Native is a component framework that consists of a root component called 'app' and other components found in 'src'.

 **Optimizing Styles**

   To avoid duplicating styles, pass an array of styles to an object.

 **Safe Area Considerations**

   Ensure your components are visible within the safe area of all mobile and tablet devices.

 **Styling with Stylesheets**

   React Native provides a 'StyleSheet' object for defining CSS styles for your components.

 **Using Flex for Layouts**

   Utilize the 'flex' property to determine how much of the screen an element should occupy.

 **Understanding Font Sizes**

   Font size represents density and independent pixels, and it doesn't require units.

 **Lists in React Native**

   React Native offers various types of lists, including 'FlatList', 'SectionList', and 'VizualizedList' (less commonly used and less powerful).

 **FlatList vs. SectionList**

    - 'FlatList' requires 'data' and 'renderItem' properties.
    - 'SectionList' organizes lists into sections and requires 'sections' and 'renderItem' properties.

**Data Requirements**

    - For 'FlatList', data must be an array.
    - For 'SectionList', data must be an array of objects.

**Rendering List Items**

    Use the 'renderItem()' function to render the items in your list.

**Key Extraction**

    Utilize the 'keyExtractor' to obtain a unique identifier for each list item.

**List Empty State**

    Implement 'ListEmptyComponent' to display alternative content when the list is empty, such as during data fetching.

**List Headers and Footers**

    Customize list headers and footers to enhance the list's appearance and functionality.

**Image Considerations**

    Be cautious when setting image sizes, as they can impact memory usage in React Native.

**Understanding Props**

    Props are data passed from a parent to a child component. They are immutable during the passage from parent to child, following a unidirectional data flow.

**Navigation Systems**

    React Native offers two primary navigation types: stack and tab navigation. Tabs appear at the top on Android and at the bottom on iOS. Developers can adapt their display based on the platform using the React Native platform API and the 'ios' property.

**Working with State**

    State allows you to change a component's behavior when something happens in the component. It triggers re-rendering when there are changes.

**Stateful vs. Stateless Components**

    - Stateful components are created with classes (an older approach) and can use lifecycle methods, such as 'componentDidMount', 'shouldComponentUpdate', and 'componentWillUnmount'.
    - Stateless components are created with functions and utilize hooks functions with reusable logic to add functionality. Hooks typically start with 'use,' like 'useState,' and should be called at the top before the 'return' statement.

**Understanding 'useEffect'**

    The 'useEffect' hook is used when you need to perform tasks outside of React within your component, such as data fetching. It accepts dependencies as an optional parameter to determine when to run the effect based on value changes. If dependencies aren't specified, the effect runs on each change or re-render.

**Geolocation**

    There are two ways without expo:
    @react-native-community/geolocation if the app is not with expo,
    With expo:
    npx expo install expo-location

    1. ask permission
    2. acess location
    *when we use a simulator the location is gonna be SanFrancisco*

**Secret Env Variables**
    On the react native doc there is informations but in this case we will use the following package:
    npm install -D react-native-dotenv
    add on Babel config the module to create the dot env file

**Custom Hook**

    Permit to better incapsulate the logic.
    In order to pass the props to the component we need a callback instead to use the component prop in the Tabs component
    Props:
    <Tab.Screen name={'Current'} component={CurrentWeather} options={{ 
          tabBarIcon: ({focused}) => (
            <Feather 
              name={'droplet'} 
              size={25} 
              color={focused ? 'tomato' : 'black'}/>
            )
    }}/>
    CallBack:
     <Tab.Screen name={'Current'} options={{ 
          tabBarIcon: ({focused}) => (
            <Feather 
              name={'droplet'} 
              size={25} 
              color={focused ? 'tomato' : 'black'}/>
            )
          }}>
            {() => <CurrentWeather weatherData={weather.list[0]}/>}
          </Tab.Screen>
**Test error Component**
    
    In the custom hook where we retun the data  
        return [loading, true, [] ]
    we can throw an error
        return [loading, true, [] ]

**Optional changing**

     ? optional changing is gonna return undefined if some prop not exist instead an error
     const weatherCondition = weather[0]?.main

**Use a context when work with API**

    The Context API is often used in conjunction with the useContext hook in React. useContext is a React hook that allows functional components to access the context provided by a Context.Provider component.

    Here's a more focused explanation of useContext:

    Create a Context:

    First, you define a context using the createContext function. This function creates a context object that consists of a Provider and a Consumer.

    const MyContext = React.createContext();

    Provide the Context:

    You wrap a part of your component tree with a Context.Provider component. This provider sets the context's value, which can be accessed by components within its subtree.

    <MyContext.Provider value={/* some value */}>
        {/* Components within this subtree can access the context */}
    </MyContext.Provider>

    Consume the Context:

    Components that need to access the context's value can use the useContext hook to do so. useContext takes the context object as an argument and returns the current context value.

    const contextValue = useContext(MyContext);

    Here's a complete example:
    
    import React, { createContext, useContext, useState } from 'react';

    // Create a context
    const MyContext = createContext();

    // Component that uses the context
    function Counter() {
    // Use useContext to access the context value
    const { count, setCount } = useContext(MyContext);

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
    }

    // App component
    function App() {
    // Set up the context value in the App component
    const [count, setCount] = useState(0);

    return (
        <MyContext.Provider value={{ count, setCount }}>
        <Counter />
        </MyContext.Provider>
    );
    }

    export default App;

**TouchableOpacity buttons**

    TouchableOpacity:

    Customization: TouchableOpacity allows for more customization. You can style it using regular View and Text components and apply any custom styling you need, giving you greater control over the appearance of the button.
    Flexibility: You can easily incorporate icons, images, or other components within a TouchableOpacity to create complex and customized buttons.
    Opacity Feedback: TouchableOpacity provides built-in opacity feedback when pressed, making it visually clear to users that the button is interactive.
    
        <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
        >
            <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>

    Button:

    Simplicity: Button is a simpler and more straightforward component. It's designed for basic button functionality and is easy to use out of the box.
    Consistency: Button provides a consistent and platform-specific appearance that matches the native platform's button style (iOS or Android). This can be advantageous if you want your app to have a native look and feel.
    Accessibility: Button automatically handles accessibility features, such as labeling for screen readers, which can be important for accessibility compliance.

    <Button
    title="Press Me"
    onPress={handlePress}
    />

    Here an example: 

    import React from 'react';
    import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

    const MyComponent = () => {
    const handlePress = () => {
        // Handle the button press event here
        alert('Button Pressed!');
    };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Touchable Opacity Example</Text>
      
        {/* TouchableOpacity component */}
        <TouchableOpacity
            style={styles.button}
            onPress={handlePress}
        >
            <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    });

    export default MyComponent;




