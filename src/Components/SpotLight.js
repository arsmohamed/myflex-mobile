import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, FlatList } from "react-native";
// import HR from "../Assets/HR.jpeg";
import HR from "../Assets/HP2.jpeg";
import { LinearGradient } from "expo-linear-gradient";

const SpotLightCard = ({ img, Title }) => {
  // const SpotLightCard = ({ img, Title }) => {
  const SpotLightContainer = (
    <View style={styles.Main_Spot_Light_Container_Style}>
      <Image source={img} style={styles.Main_Image_Style} />
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.8)", "transparent"]}
        start={{ x: 0, y: 1 }} // 1 is equal top
        end={{ x: 0, y: 0.3 }} // bottom
        style={styles.Spot_Light_Over_Layer}
      >
        <View style={styles.Info_Container_Style}>
          <View style={styles.Title_Container_Style}>
            <Text style={styles.Name_Style}>{Title}</Text>
            {/* <Text style={styles.Name_Style}>Harry Potter</Text> */}
          </View>
          <View style={styles.Rate_Container_Style}>
            <Text style={styles.Name_Style}>Rating Container </Text>
          </View>
          <View style={styles.List_Container_Style}>
            <Text style={styles.Name_Style}>List Container</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
  const HorizontalScroll = (
    <ScrollView
      horizontal={true}
      style={{
        backgroundColor: "red",
      }}
    >
      {SpotLightContainer}
      {SpotLightContainer}
      {SpotLightContainer}
    </ScrollView>
  );

  return SpotLightContainer;
};

const styles = StyleSheet.create({
  Main_Spot_Light_Container_Style: {
    width: Dimensions.get("screen").width,
    height: "50%",
    borderRadius: 10,
    zIndex: 1,
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "center",
    // borderColor: "yellow",
    // borderWidth: 1,
  },
  Main_Image_Style: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  Spot_Light_Over_Layer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  Info_Container_Style: {
    width: "100%",
    height: "50%",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-evenly",
    // borderWidth: 1,
    // borderColor: "yellow",
  },
  Title_Container_Style: {
    width: "90%",
    height: "30%",
    alignSelf: "center",
    justifyContent: "center",
    // borderColor: "yellow",
    // borderWidth: 1,
  },
  Rate_Container_Style: {
    width: "90%",
    height: "30%",
    alignSelf: "center",
    justifyContent: "center",
    borderColor: "yellow",
    borderWidth: 1,
  },
  List_Container_Style: {
    width: "90%",
    height: "30%",
    alignSelf: "center",
    justifyContent: "center",
    borderColor: "yellow",
    borderWidth: 1,
  },
  Name_Style: {
    fontSize: 25,
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default SpotLightCard;
