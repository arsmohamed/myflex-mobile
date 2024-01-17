import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const VCard = ({ img, rank, imbd, name }) => {
  const Img_Card = (
    <View style={styles.Img_Card_Style}>
      <Image source={img} style={styles.Main_Image_Style} />
      <View style={styles.Rank_Container_Style}>
        <Image source={imbd} style={styles.IMBD_Style} />
        <Text style={styles.Rank_Text_Style}>{rank}</Text>
      </View>
    </View>
  );
  const Name = <Text style={styles.Name_Style}>{name}</Text>;
  return (
    <View style={styles.Main_V_Card_Style}>
      {Img_Card}
      {Name}
    </View>
  );
};

const styles = StyleSheet.create({
  Main_V_Card_Style: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: 120,
    height: 190,
    borderRadius: 10,
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
    height: "60%",
    width: "40%",
    resizeMode: "fit",
  },
  Rank_Text_Style: {
    color: "white",
    fontSize: 16,
  },
  Name_Style: {
    fontSize: 16,
    alignSelf: "flex-start",
    paddingLeft: 10,
  },
});

export default VCard;
