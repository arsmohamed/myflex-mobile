// CustomHeaderLeft.js
import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Custom_Search_Header = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");

  const RightContainer = (
    <View style={styles.Searching_Container_Style}>
      <TextInput
        style={styles.Input_Field_Style}
        placeholder="Search..."
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
      />
      <Ionicons name="search" size={25} style={styles.Search_Icon_Style} />
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
    <View style={styles.Main_Container_Style}>
      {LeftContainer}
      {RightContainer}
    </View>
  );
};
const styles = StyleSheet.create({
  Main_Container_Style: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  Searching_Container_Style: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "white",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  Input_Field_Style: {
    flex: 1,
    color: "white",
  },
  Search_Icon_Style: {
    color: "white",
  },
});
export default Custom_Search_Header;
