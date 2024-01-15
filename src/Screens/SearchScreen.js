// SearchScreen.js
import React from 'react';
import { View, Text,TouchableOpacity  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#0B1D33', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white' }}>Here is searching</Text>

      <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.9}
          style={{ marginRight: 10 }}
        >
          <Ionicons name="arrow-back" size={55} style={{ color: 'black' }} />
        </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;