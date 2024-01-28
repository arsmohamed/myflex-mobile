import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setScreen } from "../store/navigationSlice";

const SearchCardModel = ({ props, ScreenName }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const ImgCard = (
    <View style={styles.Img_Card_style}>
      <Image source={props.mainImg} style={styles.Main_Image_Style} />
      <BlurView intensity={20} tint="dark" style={styles.Rank_Container_Style}>
        <Image source={props.imbd} style={styles.IMBD_Style} />
        <Text style={styles.Rank_Text_Style}>{props.rating}</Text>
      </BlurView>
    </View>
  );
  const Name = <Text style={styles.Name_Style}>{props.Title}</Text>;
  const Add_Icon = (
    <TouchableOpacity onPress={() => console.log("clicked")}>
      <Ionicons name="add-circle" size={35} style={{ color: "white" }} />
    </TouchableOpacity>
  );
  const handleCardPress = () => {
    navigation.navigate("Detail_Screen", { ...props, screen_Name: ScreenName });
    dispatch(setScreen("Detail_Screen"));
  };
  return (
    <View style={styles.Search_Card_Style}>
      <TouchableOpacity onPress={handleCardPress}>
        <View style={styles.Info_Container_Style}>
          {ImgCard}
          {Name}
        </View>
      </TouchableOpacity>
      {Add_Icon}
    </View>
  );
};

const styles = StyleSheet.create({
  Search_Card_Style: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 100,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "yellow",
  },
  Info_Container_Style: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    columnGap: "10",
  },
  Img_Card_style: {
    height: "100%",
    width: "50%",
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
    height: "30%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 10,
  },
  IMBD_Style: {},
  Rank_Text_Style: {
    color: "white",
    fontSize: 16,
  },
  Name_Style: {
    fontSize: 16,
    alignSelf: "center",
    color: "white",
  },
});

export default SearchCardModel;
