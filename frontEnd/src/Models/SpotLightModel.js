import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import IMDB from "../Assets/IMBD.png";

const SpotLightModel = ({ props }) => {
  const [clicked, setClicked] = useState(false);
  const handleButtonClick = () => {
    setClicked(!clicked);
  };

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <View style={styles.Container_Style}>
      <Image source={{ uri: `${baseUrl}${props.poster_path}` }} style={styles.Image_Style} />
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0.5)", "transparent"]}
        start={{ x: 0, y: 1 }} // 1 is equal top
        end={{ x: 0, y: 0.4 }} // bottom
        style={styles.Over_Layer_Style}
      >
        <View style={styles.Info_Container_Style}>
          <View style={styles.Layer_Child_Title_Container_Style}>
            <Text style={styles.Title_Style}>{props.title}</Text>
          </View>
          <View style={styles.Layer_Child_Rating_Container_Style}>
            <View style={styles.IMBD_Rating_Time_Style}>
              <Image source={IMDB} />
              <Text style={styles.Children_Text_Style}>{props.vote_average.toFixed(1)} / 10</Text>
            </View>
            <View style={styles.IMBD_Rating_Time_Style}>
              <Ionicons name="time-outline" size={30} style={{ color: "white" }} />
              <Text style={styles.Children_Text_Style}>1.57</Text>
              {/* <Text style={styles.Children_Text_Style}>{props.rating}</Text> */}
            </View>
          </View>
          <View style={styles.Layer_Child_Add_Container_Style}>
            <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
              <Ionicons name="add-circle" size={20} color={"black"} />
              <Text style={styles.Children_Add_Text_Style}>My List</Text>
            </TouchableOpacity>
            <View style={styles.Page_Container_style}>
              {[1, 2, 3, 4, 5].map((pageNumber) => (
                <Ionicons
                  key={pageNumber}
                  name="ellipse"
                  size={10}
                  color={props.page === pageNumber.toString() ? "#D68D4A" : "white"}
                />
              ))}
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  Container_Style: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 1.5,
    justifyContent: "center",
    alignContent: "center",
  },
  Image_Style: {
    width: Dimensions.get("screen").width,
    height: "100%",
    resizeMode: "cover",
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
    height: "40%",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    // borderWidth: 1,
    // borderColor: "red",
  },
  Layer_Child_Title_Container_Style: {
    width: "90%",
    height: "20%",
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "red",
  },
  Layer_Child_Rating_Container_Style: {
    width: "90%",
    height: "20%",
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
  Layer_Child_Add_Container_Style: {
    width: "90%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    // borderWidth: 1,s
    // borderColor: "red",
  },
  button: {
    width: 100,
    height: 35,
    backgroundColor: "#FFD900",
    // backgroundColor: "#D68D4A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 15,
  },
  Children_Add_Text_Style: {
    fontSize: 18,
    color: "black",
    alignSelf: "center",
    justifyContent: "center",
  },
  Page_Container_style: {
    flexDirection: "row",
    columnGap: 5,
  },
});

export default SpotLightModel;
