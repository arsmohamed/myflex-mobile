// CustomHeaderLeft.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileHeader = ({ navigation }) => {
  return (
    <View style={styles.Main_Container_Style}>
      <Text style={styles.text_Style}>My Profile</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Main_Container_Style: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    height: "12%",
    width: "100%",
    flexDirection: "column-reverse",
    alignItems: "flex-start",
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 5,
    zIndex: 2,
    backgroundColor: "#31302E",
    // backgroundColor: "rgba(0,0,0,0.5)", //till i find a solution to the blur thing
    // borderWidth: 1,
    // borderColor: "white",
  },
  text_Style: {
    fontSize: 30,
    color: "#FFD900",
  },
});
export default ProfileHeader;
