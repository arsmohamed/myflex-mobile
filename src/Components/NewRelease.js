import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import VCard from "./HomeCard";
import VCardInfo from "../Info/HomeCardInfo";

const NewReleaseContainer = ({ props }) => {
  return (
    <View style={styles.New_Release_Container_Style}>
      {VCardInfo.map((cardInfo) => (
        <VCard key={cardInfo.id} props={cardInfo} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  New_Release_Container_Style: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    rowGap: 15,
  },
});

export default NewReleaseContainer;
