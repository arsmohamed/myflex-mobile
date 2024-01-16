import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const SearchCard = ({ mainImg, imbd, rate, name }) => {
  const ImgCard = (
    <View style={styles.Img_Card_style}>
      <Image source={mainImg} style={styles.Main_Image_Style} />
      <View style={styles.Rank_Container_Style}>
        <Image source={imbd} style={styles.IMBD_Style} />
        <Text style={styles.Rank_Text_Style}>{rate}</Text>
      </View>
    </View>
  );
  const Name = <Text style={styles.Name_Style}>{name}</Text>;
  const Add_Icon = (
    <TouchableOpacity onPress={() => console.log("clicked")}>
      <Ionicons name="add-circle" size={35} style={{ color: "white" }} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.Search_Card_Style}>
      <View style={styles.Info_Container_Style}>
        {ImgCard}
        {Name}
      </View>
      {Add_Icon}
    </View>
  );
};

const styles = StyleSheet.create({
  Search_Card_Style: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
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
    width: "45%",
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
    // borderRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 10,
  },
  IMBD_Style: {
    // height: "60%",
    // width: "40%",
    resizeMode: "fit",
  },
  Rank_Text_Style: {
    color: "white",
    fontSize: 16,
  },
  Name_Style: {
    fontSize: 22,
    alignSelf: "center",
    color: "white",
  },
});

export default SearchCard;
