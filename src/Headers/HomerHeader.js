// CustomHeaderLeft.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { selectOption } from "../store/actions/NavigationActions";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { BlurView } from "expo-blur";

const HomerHeader = ({ navigation }) => {
  const selectedOption = useSelector((state) => state.navigation.selectedOption);
  const dispatch = useDispatch();

  const handleOptionPress = (option) => {
    dispatch(selectOption(option));
  };

  const renderOption = (option) => (
    <TouchableOpacity
      key={option}
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: selectedOption === option ? "#FFD900" : "white",
        borderRadius: 15,
        marginLeft: 5,
        marginBottom: 5,
      }}
      onPress={() => handleOptionPress(option)}
    >
      <Text style={{ color: selectedOption === option ? "#FFD900" : "white" }}>{option}</Text>
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
    <TouchableOpacity onPress={() => navigation.navigate("Search_Screen")}>
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
    height: "12%",
    width: "100%",
    flexDirection: "column-reverse",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    // paddingBottom: 5,
    zIndex: 2,
    // backgroundColor: "#31302E",
    backgroundColor: "rgba(0,0,0,0.5)", //till i find a solution to the blur thing
    // borderWidth: 1,
    // borderColor: "white",
  },
  Navigation_Container_Style: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 4,
    // borderWidth: 1,
    borderColor: "red",
  },
});
export default HomerHeader;
