// ChatScreen.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { changeScreen } from "../store/actions/NavigationActions";

const NHome = () => {
  const dispatch = useDispatch();

  const handleIconClick = () => {
    dispatch(changeScreen("NewChatScreen"));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e7e7e7",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Screen</Text>
      {/* <TouchableOpacity onPress={handleIconClick}>
        <Text>Go to New chat Screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default NHome;
