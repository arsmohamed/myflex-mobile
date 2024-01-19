import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import HR5 from "../Assets/HP5.jpeg";

const PortfolioModel = ({ props }) => {
  const My_Portfolio = (
    <View style={styles.Container_Style}>
      <View style={styles.My_Portfolio_Style}>
        <View style={styles.circle_Container_Style}>
          <Image source={props.Portfolio_img} style={styles.circle_Image_Style} />
        </View>
        <Text style={styles.text_Style}>{props.UserName}</Text>
      </View>
      <View style={styles.Number_Movie_container}>
        <View style={styles.Watched_Container_Style}>
          <Text style={styles.Watch_text_Style}>Watched</Text>
          <Text style={styles.Watch_text_Style}>{props.Watched}</Text>
        </View>
        <Text style={{ fontSize: 40, color: "white" }}>|</Text>
        <View style={styles.Watched_Container_Style}>
          <Text style={styles.Watch_text_Style}>Plane 2 Watch</Text>
          <Text style={styles.Watch_text_Style}>{props.Plan2Watch}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.Portfolio_Form_style}>
      {My_Portfolio}
      <TouchableOpacity onPress={() => console.log("Logged Out")}>
        <Text style={styles.logout_Text_Style}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  Portfolio_Form_style: {
    flexDirection: "column",
    width: "100%",
    height: "80%",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  Container_Style: {
    height: "25%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    // borderWidth: 1,
    // borderColor: "red",
  },
  My_Portfolio_Style: {
    flexDirection: "row",
    width: "100%",
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
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    // borderWidth: 1,
    // borderColor: "red",
  },
  Watched_Container_Style: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Watch_text_Style: {
    color: "white",
    fontSize: 18,
  },
  logout_Text_Style: {
    color: "#FF5B5B",
    fontSize: 25,
    marginBottom: 10,
  },
});

export default PortfolioModel;
