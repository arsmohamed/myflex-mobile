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
    <View>
      <Text>Chat Screen</Text>
      <TouchableOpacity onPress={handleIconClick}>
        {/* Your icon component */}
        <Text>Go to New chat Screen</Text>
      </TouchableOpacity>
      {/* Rest of your content */}
    </View>
  );
};

export default ChatScreen;
