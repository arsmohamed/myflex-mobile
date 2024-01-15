import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Screens/Nhome';
import Mylist from './Screens/MyList';
import Profile from './Screens/Profile';

const Tab = createBottomTabNavigator();

const NewContainer = () => {
  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      padding: 10,
      backgroundColor: 'grey',
      borderTopStartRadius: 40,
      borderTopEndRadius: 40,
    },
    tabBarIcon: ({ focused }) => {
      let iconName;
      if (route.name === 'Home_Screen') {
        iconName =  'home';
      } else if (route.name === 'Mylist_Screen') {
        iconName =  'play-circle';
      } else if (route.name === 'Profile_Screen') {
        iconName =  'person';
      }
      return <Ionicons name={iconName} size={25} style={{ marginRight: 10, color: focused ? 'white' : '#D68D4A' }} />;
    },
    tabBarLabelStyle: {
      color: '#D68D4A', // Set the color to match Ionicons
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home_Screen" component={Home} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="Mylist_Screen" component={Mylist} options={{ tabBarLabel: 'Map' }} />
        <Tab.Screen name="Profile_Screen" component={Profile} options={{ tabBarLabel: 'Saved' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NewContainer;
