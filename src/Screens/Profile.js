// ChatScreen.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { changeScreen } from "../store/actions/NavigationActions";

const ChatScreen = () => {
  const dispatch = useDispatch();

  const handleIconClick = () => {
    dispatch(changeScreen("NewChatScreen"));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Chat as Screen</Text>
      {/* <TouchableOpacity onPress={handleIconClick}>
        <Text>Go to New chat Screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default ChatScreen;
