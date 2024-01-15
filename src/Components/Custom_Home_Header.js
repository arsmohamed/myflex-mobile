// CustomHeaderLeft.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectOption } from "../store/actions/NavigationActions";
import Ionicons from "react-native-vector-icons/Ionicons";

const Custom_Home_Header = ({ navigation }) => {
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
        borderColor: selectedOption === option ? "yellow" : "white",
        borderRadius: 15,
        marginLeft: 5,
        marginBottom: 5,
      }}
      onPress={() => handleOptionPress(option)}
    >
      <Text style={{ color: selectedOption === option ? "yellow" : "white" }}>{option}</Text>
    </TouchableOpacity>
  );
  const LeftContainer = (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
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
  return (
    <View style={styles.Main_Container}>
      {LeftContainer}
      {RightContainer}
    </View>
  );
};
const styles = StyleSheet.create({
  Main_Container: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
});
export default Custom_Home_Header;
