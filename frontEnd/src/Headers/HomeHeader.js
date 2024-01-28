// CustomHeaderLeft.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { useDispatch } from "react-redux";
import { setScreen } from "../store/navigationSlice";

const HomerHeader = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleOptionPress = () => {
    console.log("clicked");
  };
  const handleSearch = () => {
    navigation.navigate("Search_Screen");
    dispatch(setScreen("Search_Screen"));
  };
  const renderOption = (option) => (
    <TouchableOpacity
      key={option}
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#FFD900",
        borderRadius: 15,
        marginLeft: 5,
        marginBottom: 5,
      }}
      onPress={() => handleOptionPress(option)}
    >
      <Text style={{ color: "#FFD900" }}>{option}</Text>
    </TouchableOpacity>
  );
  const LeftContainer = (
    <View style={{ flexDirection: "row" }}>
      {renderOption("Movie")}
      {renderOption("Series")}
      {renderOption("Anime")}
    </View>
  );
  const RightContainer = (
    <TouchableOpacity onPress={() => handleSearch()}>
      <Ionicons name="search" size={30} style={{ color: "white" }} />
    </TouchableOpacity>
  );
  const NavigationContainer = (
    <View style={styles.Navigation_Container_Style}>
      {LeftContainer}
      {RightContainer}
    </View>
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
    height: "13%",
    width: "100%",
    flexDirection: "column-reverse",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 5,
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,0.5)", //till i find a solution to the blur thing
  },
  Navigation_Container_Style: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 4,
  },
});
export default HomerHeader;
