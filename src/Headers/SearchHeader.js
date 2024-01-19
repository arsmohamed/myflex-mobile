import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchHeader = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");

  const RightContainer = (
    <View style={styles.SearchingContainerStyle}>
      <Ionicons name="search" size={25} style={styles.SearchIconStyle} />
      <TextInput
        style={styles.InputFieldStyle}
        placeholder="Search"
        placeholderTextColor="white"
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
      />
    </View>
  );

  const LeftContainer = (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      activeOpacity={0.9}
      style={{ marginRight: 10 }}
    >
      <Ionicons name="arrow-back" size={25} style={{ color: "white" }} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.MainContainerStyle}>
      {LeftContainer}
      {RightContainer}
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainerStyle: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SearchingContainerStyle: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "white",
    // paddingHorizontal: 10,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  InputFieldStyle: {
    color: "white",
    paddingLeft: 5,
    width: "80%",
    fontSize: 18,
  },
  SearchIconStyle: {
    color: "white",
  },
});

export default SearchHeader;
