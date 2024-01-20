// ChatScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from "react-native";
import DetailHeader from "../Headers/DetailHeader";
import HP from "../Assets/HP2.jpeg";
const DetailScreen = ({ route }) => {
  const { Title, img, imbd, rating } = route.params;
  return (
    <View style={styles.Detail_Container_Style}>
      <DetailHeader />
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          borderWidth: 4,
          borderColor: "green",
        }}
      >
        {/* <ScrollView> */}
        <Image source={HP} style={styles.Image_Style} />
        <Text>Detail Screen</Text>
        <Text>{Title}</Text>
        <Text>{rating}</Text>
        {/* </ScrollView> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Detail_Container_Style: {
    flex: 0.95,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // borderWidth: 1,
    // borderColor: "red",
  },
  Image_Style: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 1.5,
    resizeMode: "cover",
    // borderWidth: 1,
    // borderColor: "red",
  },
});

export default DetailScreen;
