// ChatScreen.js
import React, { useEffect } from "react";
import { changeScreen } from "../store/actions/NavigationActions";
import ProfileHeader from "../Headers/ProfileHeader";
import PortfolioForm from "../Models/PortfolioModel";
import PortfolioInfo from "../Info/PortfolioInfo";
import { useDispatch } from "react-redux";
import { View } from "react-native";
import { setScreen } from "../store/navigationSlice";

const ChatScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setScreen("Profile"));
  }, []);

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
