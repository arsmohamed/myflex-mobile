import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { setScreen } from "../store/navigationSlice";
import { useDispatch } from "react-redux";
import IMDB from "../Assets/IMBD.png";
import { BlurView } from "expo-blur";

const MovieCardModel = ({ props, ScreenName }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("Detail_Screen", { ...props, screen_Name: ScreenName });
    dispatch(setScreen("Detail_Screen"));
  };

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <TouchableOpacity onPress={handleCardPress} id={props.id}>
      <View style={styles.Main_V_Card_Style}>
        <View style={styles.Img_Card_Style}>
          <Image
            source={{ uri: `${baseUrl}${props.poster_path}` }}
            style={styles.Main_Image_Style}
          />
          <BlurView intensity={20} tint="dark" style={styles.Rank_Container_Style}>
            <Image source={IMDB} style={styles.IMBD_Style} />
            <Text style={styles.Rank_Text_Style}>{props.vote_average.toFixed(1) + " / 10"}</Text>
          </BlurView>
        </View>
        <Text style={styles.Name_Style} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Main_V_Card_Style: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 120,
    height: 190,
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 5,
    // borderWidth: 1,
    // borderColor: "red",
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
