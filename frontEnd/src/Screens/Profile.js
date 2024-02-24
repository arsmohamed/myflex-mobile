// ChatScreen.js
import React, { useEffect } from "react";
import ProfileHeader from "../Headers/ProfileHeader";
import PortfolioForm from "../Models/PortfolioModel";
import PortfolioInfo from "../Info/PortfolioInfo";
import { useDispatch } from "react-redux";
import { View, ScrollView, StyleSheet } from "react-native";
import { setScreen } from "../store/navigationSlice";

const ChatScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setScreen("Profile_Screen"));
  }, []);

  return (
    <View style={styles.Profile_Style}>
      <ProfileHeader />
      {PortfolioInfo.map((Info) => (
        <PortfolioForm key={Info.id} props={Info} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  Profile_Style: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",

    // borderWidth: 1,
    // borderColor: "white",
  },
});

export default ChatScreen;
