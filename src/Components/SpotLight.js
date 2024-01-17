import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SpotLightCard = ({ img, rank, imbd, name }) => {
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
  return <View style={styles.Main_Spot_Light_Container_Style}></View>;
};

const styles = StyleSheet.create({
  Main_Spot_Light_Container_Style: {
    width: "100%",
    height: "50%",
    // backgroundColor: "red",
    borderRadius: 10,
    zIndex: 1,
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "center",
    borderWidth: 1,
    borderColor: "yellow",
  },
});

export default SpotLightCard;
