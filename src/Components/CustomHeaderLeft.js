// CustomHeaderLeft.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectOption } from "../store/actions/NavigationActions";

const CustomHeaderLeft = () => {
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
        marginLeft: 10,
        marginBottom: 5,
      }}
      onPress={() => handleOptionPress(option)}
    >
      <Text style={{ color: selectedOption === option ? "yellow" : "white" }}>{option}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {renderOption("Movie")}
      {renderOption("Series")}
      {renderOption("Anime")}
    </View>
  );
};

export default CustomHeaderLeft;
