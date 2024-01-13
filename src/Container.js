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
    <View style={styles.navigationContainer}>
       <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "#D68D4A",
            inactiveTintColor: "#ffffffff",
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="MyList" component={MyListScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
    navigationContainer: {
        flex: 1,
        backgroundColor: "#0B1D33", // Background color for NavigationContainer
    },
});

export default Container;
