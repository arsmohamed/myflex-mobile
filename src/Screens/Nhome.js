// ChatScreen.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { changeScreen } from "../store/actions/NavigationActions";
import Ionicons from 'react-native-vector-icons/Ionicons';

const NHome = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleIconClick = () => {
    dispatch(changeScreen("NewChatScreen"));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Screen</Text>
      <TouchableOpacity
          onPress={() => navigation.navigate('Search_Screen')}
          style={{ marginRight: 10 }}
        >
          <Ionicons name="search" size={55} style={{ color: 'black' }} />
        </TouchableOpacity>
    </View>
  );
};

export default NHome;
