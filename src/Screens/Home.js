// HomeScreen.js
import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import CustomHeaderLeft from '../Components/CustomHeaderLeft';
import SearchScreen from './SearchScreen';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          style={{ marginRight: 10 }}
        >
          <Ionicons name="search" size={25} style={{ color: 'white' }} />
        </TouchableOpacity>
      ),
      headerLeft: () => <CustomHeaderLeft />,
      headerStyle: {
        backgroundColor: '#0B1D33',
        borderBottomWidth: 1,
        borderBottomColor: 'yellow',
      },
      headerTintColor: 'red',
      tabBarStyle: {
        backgroundColor: 'transparent',
      },
    });
  }, [navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ChatScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      {/* Add more screens to the HomeStack if needed */}
    </Stack.Navigator>
  );
};

const ChatScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#0B1D33', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white' }}>Chat Screen</Text>
    </View>
  );
};

export default HomeScreen;
