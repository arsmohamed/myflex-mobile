// SearchScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Custom_Search_Header from "../Components/Custom_Search_Header";

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.Main_Contain_Style}>
      <View style={styles.First_Container_Style}>
        <View style={styles.Top_Bar_Container_Style}>
          <Custom_Search_Header navigation={navigation} />
        </View>
        <View style={styles.Canvas_Container_Style}>
          <Text style={{ color: "white" }}>Searching</Text>
        </View>
      </View>
      <View style={styles.second_Container_Style}></View>
    </View>
  );
};

export default SearchScreen;
const styles = StyleSheet.create({
  Main_Contain_Style: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
  },
  First_Container_Style: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    width: "100%",
    zIndex: 1,
    // borderWidth: 3,
    // borderColor: "red",
  },
  second_Container_Style: {
    backgroundColor: "transparent",
    height: "10%",
    width: "100%",
    // borderWidth: 3,
    // borderColor: "yellow",
  },
  Top_Bar_Container_Style: {
    height: "12%",
    width: "100%",
    flexDirection: "column-reverse",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    // borderWidth: 3,
    // borderColor: "white",
  },
  Canvas_Container_Style: {
    height: "88%",
    width: "100%",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
});
