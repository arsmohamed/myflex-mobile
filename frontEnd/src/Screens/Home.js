// ChatScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import SpotLightModel from "../Models/SpotLightModel";
import { getRecommendations } from "../store/Actions";
import MovieCardForm from "../Models/MovieCardModel";
import { setScreen } from "../store/navigationSlice";
import HomeHeader from "../Headers/HomeHeader";

{/* <ion-icon name="arrow-back-circle-outline"></ion-icon> */ }
const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const MovieList = useSelector((state) => state.movie.movieList);

  useEffect(() => {
    dispatch(setScreen("Home_Screen"));
    dispatch(getRecommendations(2)).then(() => { });
  }, []);

  return (
    <View style={styles.Main_Contain_Style}>
      <HomeHeader navigation={navigation} />
      <ScrollView>
        <View style={styles.Scroll_Container_Style}>
          <FlatList
            data={MovieList.slice(0, 5)}
            renderItem={({ item, index }) => (
              <SpotLightModel props={{ ...item, page: (index + 1).toString() }} />
            )}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id.toString()}
          />
          {/* <Text style={styles.Text_Style}>Recommendation</Text>
          <FlatList
            data={MovieInfo}
            renderItem={({ item }) => <HomeCard props={item} ScreenName={"Home_Screen"} />}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            keyExtractor={(item) => item.id}
          /> */}
          <Text style={styles.Text_Style}>New Release</Text>
          <View style={styles.New_Release_Container_Style}>
            {MovieList.map((cardInfo) => (
              <MovieCardForm key={cardInfo.id} props={cardInfo} ScreenName={"Home_Screen"} />
            ))}
          </View>
          <View style={styles.Change_Recommendation_Container_Style}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={50}
              color="#D68D4A"
            />
            <Text style={styles.Children_Text_Style}>1</Text>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={50}
              color="#D68D4A"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Main_Contain_Style: {
    flex: 1,
    backgroundColor: "black",
    zIndex: 1,
    paddingBottom: "20%",
    marginBottom: 5
  },
  Scroll_Container_Style: {
    rowGap: 25,
    flexDirection: "column",
    // borderWidth: 1,
    // borderColor: "yellow",
  },
  Text_Style: {
    color: "white",
    fontSize: 22,
  },
  New_Release_Container_Style: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    rowGap: 20,
    alignItems: "center",
    // justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "green",
  },
  Change_Recommendation_Container_Style: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 10,
  },
  Children_Text_Style: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
    marginRight: 10,
  },
});
