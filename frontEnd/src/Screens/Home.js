// ChatScreen.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import SpotLightModel from "../Models/SpotLightModel";
import MovieCardForm from "../Models/MovieCardModel";
import HomeHeader from "../Headers/HomeHeader";
import MovieCardInfo from "../Info/MovieCardInfo";
import HomeCardInfo from "../Info/MovieCardInfo";
import HomeCard from "../Models/MovieCardModel";
import SlideInfo from "../Info/SlideInfo";
import { useDispatch } from "react-redux";
import { setScreen } from "../store/navigationSlice";
const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setScreen("Home_Screen"));
  }, []);

  return (
    <View style={styles.Main_Contain_Style}>
      <HomeHeader navigation={navigation} />
      <ScrollView>
        <View style={styles.Scroll_Container_Style}>
          <FlatList
            data={SlideInfo}
            renderItem={({ item }) => <SpotLightModel props={item} />}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
          />
          <Text style={styles.Text_Style}>Recommendation</Text>
          <FlatList
            data={HomeCardInfo}
            renderItem={({ item }) => <HomeCard props={item} ScreenName={"Home_Screen"} />}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            keyExtractor={(item) => item.id}
          />
          <Text style={styles.Text_Style}>New Release</Text>
          <View style={styles.New_Release_Container_Style}>
            {MovieCardInfo.map((cardInfo) => (
              <MovieCardForm key={cardInfo.id} props={cardInfo} ScreenName={"Home_Screen"} />
            ))}
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
    rowGap: 15,
  },
});