import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PortfolioModel = ({ props }) => {
  //Top Profile Container
  const My_Portfolio = (
    <View style={styles.Top_Container_Style}>
      <View style={styles.My_Portfolio_Style}>
        <View style={styles.circle_Container_Style}>
          <Image source={props.Portfolio_img} style={styles.circle_Image_Style} />
        </View>
        <Text style={styles.text_Style}>{props.UserName}</Text>
      </View>
      {/* <View style={styles.Number_Movie_container}> */}
      <View style={styles.Watched_Container_Style}>
        <Text style={styles.Watch_text_Style}>My List</Text>
        <Text style={styles.Watch_text_Style}>{props.Watched}</Text>
      </View>
      <View style={styles.Watched_Container_Style}>
        <Text style={styles.Watch_text_Style}>Watched</Text>
        <Text style={styles.Watch_text_Style}>{props.Plan2Watch}</Text>
      </View>
      {/* </View> */}
    </View>
  );

  return <View style={styles.Portfolio_Form_style}>{My_Portfolio}</View>;
};
const styles = StyleSheet.create({
  Portfolio_Form_style: {
    flexDirection: "column",
    width: "100%",
    height: "80%",
    alignItems: "center",
    justifyContent: "space-between",

    // borderWidth: 1,
    // borderColor: "blue",
  },
  Top_Container_Style: {
    height: "25%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderWidth: 1,
    borderBottomColor: "grey",
    // borderColor: "white",
  },
  My_Portfolio_Style: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",

    // borderWidth: 1,
    // borderColor: "red",
  },
  circle_Container_Style: {
    width: 70,
    height: 70,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "white",
    overflow: "hidden",
    marginRight: 10,
  },
  circle_Image_Style: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text_Style: {
    color: "white",
    fontSize: 25,
  },
  Number_Movie_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    // borderWidth: 1,
    // borderColor: "red",
  },
  Watched_Container_Style: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40%",

    // borderWidth: 1,
    // borderColor: "blue",
  },
  Watch_text_Style: {
    color: "white",
    fontSize: 18,
  },
});

export default PortfolioModel;
