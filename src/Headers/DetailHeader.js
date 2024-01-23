// CustomHeaderLeft.js
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

const DetailHeader = ({ ReturnedScreen }) => {
  const navigation = useNavigation();

  const LeftContainer = (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(ReturnedScreen);
        // navigation.navigate("Mylist");
        // console.log(ReturnedScreen);
      }}
      // onPress={() => navigation.goBack()}
      activeOpacity={0.9}
      style={{ marginRight: 10 }}
    >
      <Ionicons name="arrow-back" size={25} style={{ color: "white" }} />
    </TouchableOpacity>
  );

  const NavigationContainer = (
    <View style={styles.Navigation_Container_Style}>{LeftContainer}</View>
  );
  return (
    <BlurView intensity={20} tint="dark" style={styles.Main_Container_Style}>
      {NavigationContainer}
    </BlurView>
  );
};
const styles = StyleSheet.create({
  Main_Container_Style: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "12%",
    width: "100%",
    flexDirection: "column-reverse",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 5,
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,0.5)", //till i find a solution to the blur thing
    // borderWidth: 1,
    // borderColor: "white",
  },
  Navigation_Container_Style: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2,
    // borderWidth: 1,
    // borderColor: "red",
  },
});
export default DetailHeader;
