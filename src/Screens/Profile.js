// ChatScreen.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { changeScreen } from "../store/actions/NavigationActions";
import ProfileHeader from "../Headers/ProfileHeader";
import PortfolioForm from "../Forms/PortfolioForm";

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
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <ProfileHeader />
      {/* <Text style={{ color: "white" }}>Profile Screen</Text> */}
      <PortfolioForm />
      {/* <TouchableOpacity onPress={handleIconClick}>
        <Text>Go to New chat Screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default ChatScreen;
