// ChatScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from "react-native";
import DetailHeader from "../Headers/DetailHeader";
import HP from "../Assets/HP2.jpeg";
import IMBD from "../Assets/IMBD.png";
const DetailScreen = ({ route }) => {
  const { Title, img, imbd, rating } = route.params;
  return (
    <View style={styles.COntainer_Style}>
      <DetailHeader />
      <View style={styles.Detail_Container_Style}>
        {/* <ScrollView> */}
        <Image source={HP} style={styles.Image_Style} />
        <View style={styles.Info_Style}>
          <Text style={[styles.Title_Style, styles.Text_color]}>{Title}</Text>
          <View style={styles.First_Container_Style}>
            <View style={styles.Rate_Container_Style}>
              <Image source={IMBD} />
              <Text style={[styles.Rating_Style, styles.Text_color]}>{rating}</Text>
            </View>
            <Text style={[styles.Rating_Style, styles.Text_color]}>{rating}</Text>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};
const styles = StyleSheet.create({
  COntainer_Style: {
    flex: 0.95,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // borderWidth: 1,
    // borderColor: "red",
  },
  Detail_Container_Style: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    // borderWidth: 4,
    // borderColor: "green",
  },
  Image_Style: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 2,
    resizeMode: "cover",
    // borderWidth: 1,
    // borderColor: "red",
  },
  Info_Style: {
    width: "90%",
    height: "100%",
    paddingTop: 10,
    rowGap: 20,
    borderWidth: 4,
    borderColor: "red",
  },
  Title_Style: {
    fontSize: 30,
  },
  First_Container_Style: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Rate_Container_Style: {
    width: "50%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    columnGap: 10,
  },
  Rating_Style: {
    fontSize: 25,
  },
  Text_color: {
    color: "white",
  },
});

export default DetailScreen;
