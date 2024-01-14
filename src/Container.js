// Container.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./Screens/Home";
import MyListScreen from "./Screens/MyList";
import ProfileScreen from "./Screens/Profile";
import SearchScreen from './Screens/SearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="SearchScreen" component={SearchScreen} />
    {/* Add more screens to the HomeStack if needed */}
  </Stack.Navigator>
);

const Container = () => {
  return (
    <View style={styles.MainContainerStyle}>
       <NavigationContainer >
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#FFD900",
            tabBarInactiveTintColor: "#ffffffff",
            tabBarStyle: {
              display: 'flex',
            },
          }}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
          />
          <Tab.Screen 
            name="MyList" 
            component={MyListScreen} 
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainerStyle: {
    flex: 1,
    backgroundColor: "black",  
  },
});

export default Container;
