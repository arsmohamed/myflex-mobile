import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

const SpotLightContainer = ({ props }) => {
  const SpotLightContainer = (
    <View style={styles.Container_Style}>
      <Image source={props.img} style={styles.Image_Style} />
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.8)", "transparent"]}
        start={{ x: 0, y: 1 }} // 1 is equal top
        end={{ x: 0, y: 0.4 }} // bottom
        style={styles.Over_Layer_Style}
      >
        <View style={styles.Info_Container_Style}>
          <View style={styles.Layer_Child_Title_Container_Style}>
            <Text style={styles.Title_Style}>{props.Title}</Text>
          </View>
          <View style={styles.Layer_Child_Rating_Container_Style}>
            <View style={styles.IMBD_Rating_Time_Style}>
              <Image source={props.imbd} />
              <Text style={styles.Children_Text_Style}>{props.rating}</Text>
            </View>
            <View style={styles.IMBD_Rating_Time_Style}>
              <Ionicons name="time-outline" size={30} style={{ color: "white" }} />
              <Text style={styles.Children_Text_Style}>{props.rating}</Text>
            </View>
          </View>
          <View style={styles.Layer_Child_Add_Container_Style}>
            <Text style={styles.Title_Style}>List Container</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );

  return SpotLightContainer;
};

const styles = StyleSheet.create({
  Container_Style: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 2,
    justifyContent: "center",
    backgroundColor: "green",
    alignContent: "center",
    // borderWidth: 3,
    // borderColor: "black",
  },
  Image_Style: {
    width: Dimensions.get("screen").width,
    height: "100%",
    resizeMode: "cover",
    // borderWidth: 1,
    // borderColor: "red",
  },
  Over_Layer_Style: {
    width: Dimensions.get("screen").width,
    height: "100%",
    position: "absolute",
    bottom: 0,
    // borderWidth: 1,
    // borderColor: "red",
  },
  Info_Container_Style: {
    width: Dimensions.get("screen").width,
    height: "50%",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    // borderWidth: 1,
    // borderColor: "red",
  },
  Layer_Child_Title_Container_Style: {
    width: "90%",
    height: "30%",
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "red",
  },
  Layer_Child_Rating_Container_Style: {
    width: "90%",
    height: "30%",
    alignSelf: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    columnGap: 15,
    // borderWidth: 1,
    // borderColor: "red",
  },
  Title_Style: {
    fontSize: 25,
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  IMBD_Rating_Time_Style: {
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  Children_Text_Style: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  Time_Style: {},
  Layer_Child_Add_Container_Style: {
    width: "90%",
    height: "30%",
    alignSelf: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "red",
  },
});

export default SpotLightContainer;
