// CustomHeaderLeft.js
import React from "react";
import { Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

const ProfileHeader = () => {
  return (
    <BlurView intensity={20} tint="dark" style={styles.Main_Container_Style}>
      <Text style={styles.text_Style}>My Profile</Text>
    </BlurView>
  );
};
const styles = StyleSheet.create({
  Main_Container_Style: {
    top: 0,
    left: 0,
    height: "12%",
    width: "100%",
    flexDirection: "column-reverse",
    alignItems: "flex-start",
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 5,
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,0.5)", //till i find a solution to the blur thing
    // borderWidth: 1,
    // borderColor: "white",
  },
  text_Style: {
    fontSize: 30,
    color: "#FFD900",
  },
});
export default ProfileHeader;
