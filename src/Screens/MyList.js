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
        backgroundColor: "#e7e7e7",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>MyList Screen</Text>
      {/* <TouchableOpacity onPress={handleIconClick}>
        <Text>Go to New chat Screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default ChatScreen;
