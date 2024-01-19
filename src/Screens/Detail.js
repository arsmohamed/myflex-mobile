// ChatScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailScreen = ({ route }) => {
  const { Title, img, imbd, rating } = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Detail Screen</Text>
      <Text>{Title}</Text>
      <Text>{rating}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  MyList_Scroll_Style: {
    height: "75%",
  },
  MyList_Label_style: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    columnGap: 15,
    margin: 10,
  },
  MyList_Text_Style: {
    fontSize: 20,
    color: "white",
  },
  New_Release_Container_Style: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    rowGap: 15,
  },
});

export default DetailScreen;
