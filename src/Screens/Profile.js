// ChatScreen.js
import React from "react";
import { changeScreen } from "../store/actions/NavigationActions";
import ProfileHeader from "../Headers/ProfileHeader";
import PortfolioForm from "../Models/PortfolioModel";
import PortfolioInfo from "../Info/PortfolioInfo";
import { useDispatch } from "react-redux";
import { View } from "react-native";

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
      }}
    >
      <ProfileHeader />
      {PortfolioInfo.map((Info) => (
        <PortfolioForm key={Info.id} props={Info} />
      ))}
      {/* <PortfolioForm /> */}
    </View>
  );
};

export default ChatScreen;
