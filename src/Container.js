// Container.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/Home";
import MyListScreen from "./Screens/MyList";
import ProfileScreen from "./Screens/Profile";

const Tab = createBottomTabNavigator();

const Container = () => {
  return (
    <View style={styles.MainContainerStyle}>
       <NavigationContainer>
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
            name="Homey" 
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
    backgroundColor: "grey",  
  },
});

export default Container;
