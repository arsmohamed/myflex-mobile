import { View, Text, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../store/navigationSlice";
import MovieCardModel from "./MovieCardModel";
import React, { useEffect } from "react";

const PortfolioModel = ({ props }) => {
  // ---------------------------------  Const ----------------------------------------------------------
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.movieList);
  const filteredList = movieList.filter((movie) => movie.onMyList);

  //Top Profile Container
  const My_Portfolio = (
    <View style={styles.Top_Container_Style}>
      <View style={styles.My_Portfolio_Style}>
        <View style={styles.circle_Container_Style}>
          <Image source={props.Portfolio_img} style={styles.circle_Image_Style} />
        </View>
        <Text style={styles.text_Style}>{props.UserName}</Text>
      </View>
      <View style={styles.Watched_Container_Style}>
        <Text style={styles.Watch_text_Style}>My List</Text>
        <Text style={styles.Watch_text_Style}>{props.Watched}</Text>
      </View>
      <View style={styles.Watched_Container_Style}>
        <Text style={styles.Watch_text_Style}>Watched</Text>
        <Text style={styles.Watch_text_Style}>{props.Plan2Watch}</Text>
      </View>
    </View>
  );

  // MyList Container
  const MyListContainer = (
    <View style={styles.New_Release_Container_Style}>
      {filteredList.map((movie) => (
        <MovieCardModel key={movie.title} props={movie} ScreenName={"Profile_Screen"} />
      ))}
    </View>
  );
  //returned View
  return (
    <View style={styles.Portfolio_Form_style}>
      {My_Portfolio}
      {MyListContainer}
    </View>
  );
};
const styles = StyleSheet.create({
  Portfolio_Form_style: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    rowGap: 20,

    // borderWidth: 1,
    // borderColor: "blue",
  },
  Top_Container_Style: {
    height: "15%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderWidth: 1,
    borderBottomColor: "grey",
    // borderColor: "white",
  },
  My_Portfolio_Style: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",

    // borderWidth: 1,
    // borderColor: "red",
  },
  circle_Container_Style: {
    width: 70,
    height: 70,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "white",
    overflow: "hidden",
    marginRight: 10,
  },
  circle_Image_Style: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text_Style: {
    color: "white",
    fontSize: 25,
  },
  Number_Movie_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    // borderWidth: 1,
    // borderColor: "red",
  },
  Watched_Container_Style: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40%",

    // borderWidth: 1,
    // borderColor: "blue",
  },
  Watch_text_Style: {
    color: "white",
    fontSize: 18,
  },
  New_Release_Container_Style: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    rowGap: 15,
  },
});

export default PortfolioModel;
