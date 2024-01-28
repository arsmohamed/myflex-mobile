import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { useDispatch } from "react-redux";
import { setScreen } from "../store/navigationSlice";

const MovieCardModel = ({ props, ScreenName }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("Detail_Screen", { ...props, screen_Name: ScreenName });
    dispatch(setScreen("Detail_Screen"));
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.Main_V_Card_Style}>
        <View style={styles.Img_Card_Style}>
          <Image source={props.img} style={styles.Main_Image_Style} />
          <BlurView intensity={20} tint="dark" style={styles.Rank_Container_Style}>
            <Image source={props.imbd} style={styles.IMBD_Style} />
            <Text style={styles.Rank_Text_Style}>{props.rating}</Text>
          </BlurView>
        </View>
        <Text style={styles.Name_Style}>{props.Title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Main_V_Card_Style: {
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "center",
    width: 120,
    height: 190,
    borderRadius: 10,
    marginRight: 10,
    // borderWidth: 1,
    // borderColor: "yellow",
  },
  Img_Card_Style: {
    height: "85%",
    width: "100%",
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "red",
  },
  Main_Image_Style: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  Rank_Container_Style: {
    width: "100%",
    height: "20%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 10,
    // padding: 5,
  },
  IMBD_Style: {
    resizeMode: "cover",
  },
  Rank_Text_Style: {
    color: "white",
    fontSize: 16,
  },
  Name_Style: {
    fontSize: 16,
    alignSelf: "flex-start",
    paddingLeft: 10,
    color: "white",
  },
});

export default MovieCardModel;
