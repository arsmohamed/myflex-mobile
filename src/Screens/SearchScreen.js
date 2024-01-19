// SearchScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Custom_Search_Header from "../Headers/SearchHeader";
import SearchCardForm from "../Forms/SearchCardForm";
import SearchCardInfo from "../Info/SearchCardInfo";

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.Main_Contain_Style}>
      <View style={styles.Top_Bar_Container_Style}>
        <Custom_Search_Header navigation={navigation} />
      </View>
      <ScrollView>
        <View style={styles.Canvas_Container_Style}>
          <Text style={styles.Text_Style}>Hot Search</Text>
          {SearchCardInfo.map((cardInfo) => (
            <SearchCardForm key={cardInfo.id} props={cardInfo} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
const styles = StyleSheet.create({
  Main_Contain_Style: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
    paddingBottom: "20%",
  },
  Top_Bar_Container_Style: {
    height: "14%",
    width: "100%",
    flexDirection: "column-reverse",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 2,
    backgroundColor: "rgba(0,0,0,0.5)",
    // borderWidth: 1,
    // borderColor: "white",
  },
  Canvas_Container_Style: {
    width: "100%",
    flexDirection: "column",
    rowGap: 15,
    justifyContent: "center",
    padding: "2%",
    // borderWidth: 1,
    // borderColor: "red",
  },
  Text_Style: {
    color: "white",
    fontSize: 22,
  },
});
