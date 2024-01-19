// ChatScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import DetailHeader from "../Headers/DetailHeader";

const DetailScreen = ({ route }) => {
  const { Title, img, imbd, rating } = route.params;
  return (
    <View style={styles.Detail_Container_Style}>
      <DetailHeader />
      <View
        style={{
          borderWidth: 1,
          borderColor: "green",
          flex: 0.9,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <ScrollView>
          <Text>Detail Screen</Text>
          <Text>{Title}</Text>
          <Text>{rating}</Text>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Detail_Container_Style: {
    // flex: 0.55,
    flex: 0.95,
    backgroundColor: "grey",
    // justifyContent: "center",
    // alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
  },
});

export default DetailScreen;
