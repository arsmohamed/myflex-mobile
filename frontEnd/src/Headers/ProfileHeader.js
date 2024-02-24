// CustomHeaderLeft.js
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { Logout } from "../store/Actions";

const ProfileHeader = () => {
  const dispatch = useDispatch();

  // Handle the "Logout" button press and clear data
  const handleLogout = async () => {
    try {
      await dispatch(Logout());
    } catch (error) {
      // Handle error if needed
      console.error(error);
    }
  };

  return (
    <BlurView intensity={20} tint="dark" style={styles.Main_Container_Style}>
      <View style={styles.Profile_Container_Style}>
        <Text style={styles.text_Style}>My Profile</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={30} style={{ color: "white" }} />
        </TouchableOpacity>
      </View>
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
    alignItems: "center",
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 5,
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,0.5)", //till i find a solution to the blur thing

    // borderWidth: 1,
    // borderColor: "white",
  },
  Profile_Container_Style: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text_Style: {
    fontSize: 30,
    color: "#FFD900",
  },
});
export default ProfileHeader;
