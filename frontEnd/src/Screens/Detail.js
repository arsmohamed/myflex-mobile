// ChatScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import DetailHeader from "../Headers/DetailHeader";
import HP from "../Assets/HP2.jpeg";
import IMBD from "../Assets/IMBD.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import {
  setAddToMyList,
  setSubFromMyList,
  setIsWatched,
  setNotWatched,
  addToTheList,
  // initializeMovieState,
} from "../store/MovieList";

const DetailScreen = ({ route }) => {
  // Consts
  const dispatch = useDispatch();
  const selectAddToMyList = useSelector((state) => state.movie.AddToMyList);
  const SelectWatched = useSelector((state) => state.movie.isWatched);
  const myList = useSelector((state) => state.movie.myList);
  const {
    title,
    screen_Name,
    overview,
    poster_path,
    vote_average,
    release_date,
    genre_ids,
    popularity,
  } = route.params;
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const movieState = useSelector((state) => state.movie.movieStates[title] || {});
  const { onMyList, isWatched } = movieState;

  // functions
  const handleAddToMyList = () => {
    const movieExists = myList.some((movie) => movie.title === title);
    if (!selectAddToMyList && !movieExists) {
      dispatch(setAddToMyList({ movieId: title }));
      dispatch(
        addToTheList({
          movieId: title,
          movieData: {
            title,
            screen_Name,
            overview,
            poster_path,
            vote_average,
            popularity,
          },
        }),
      );
    } else {
      dispatch(setSubFromMyList({ movieId: title }));
    }
    // const movieExists = myList.some((movie) => movie.title === title);
    // if (!selectAddToMyList && !movieExists) {
    //   dispatch(setAddToMyList());
    //   dispatch(
    //     addToTheList({ title, screen_Name, overview, poster_path, vote_average, popularity }),
    //   );
    // } else {
    //   dispatch(setSubFromMyList());
    // }
  };
  const handleToggleWatched = () => {
    if (SelectWatched) {
      dispatch(setNotWatched());
    } else {
      dispatch(setIsWatched());
    }
  };

  // return view
  return (
    <View style={styles.Container_Style}>
      <DetailHeader ReturnedScreen={screen_Name} movieId={title} />
      <ScrollView>
        <View style={styles.Detail_Container_Style}>
          <Image source={{ uri: `${baseUrl}${poster_path}` }} style={styles.Image_Style} />
          <View style={styles.Info_Style}>
            <Text style={[styles.Title_Style, styles.Text_color]}>{title}</Text>
            <View style={styles.First_Container_Style}>
              <TouchableOpacity style={styles.button} onPress={handleToggleWatched}>
                <Ionicons name={isWatched ? "eye-off" : "eye"} size={30} color={"black"} />
                <Text style={styles.Add_Text_Style}>{SelectWatched ? "Unwatch" : "Watched"}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleAddToMyList}>
                <Ionicons
                  name={onMyList ? "remove-circle" : "add-circle"}
                  size={30}
                  color={"black"}
                />
                <Text style={styles.Add_Text_Style}>My List</Text>
              </TouchableOpacity>

              <View style={styles.Rate_Container_Style}>
                <Image source={IMBD} />
                <Text style={[styles.Rating_Style, styles.Text_color]}>
                  {vote_average.toFixed(1)} / 10
                </Text>
              </View>
            </View>
            <Text style={styles.Genera_Container_Style}>
              {popularity}
              {/* PG | 1h 57min | Animation, Action, Adventure | 14 December 2018 (USA) */}
            </Text>
            <View style={{ rowGap: 5 }}>
              <Text style={styles.Cast_Container_Style}>
                Directors: Peter Ramsey, Bob Persichetti, Rodney Rothman
              </Text>
              <Text style={styles.Cast_Container_Style}>
                Cast: Shameik Moore, Jake Johnson, Hailee Steinfeld
              </Text>
            </View>
            <Text style={styles.Description_Container_Style}>{overview}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container_Style: {
    backgroundColor: "black",
    paddingBottom: "5%",
  },
  Detail_Container_Style: {
    width: Dimensions.get("screen").width,
    alignItems: "center",
    justifyContent: "center",
  },
  Image_Style: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 1.5,
    resizeMode: "cover",
  },
  Info_Style: {
    width: "90%",
    paddingTop: 10,
    rowGap: 20,
  },
  Title_Style: {
    fontSize: 30,
  },
  First_Container_Style: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 10,
  },
  Rate_Container_Style: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    columnGap: 10,
  },
  button: {
    width: 110,
    height: 35,
    backgroundColor: "#FFD900",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 25,
  },
  Add_Text_Style: {
    fontSize: 18,
    alignSelf: "center",
    justifyContent: "center",
  },
  Rating_Style: {
    fontSize: 20,
  },
  Genera_Container_Style: {
    fontSize: 16,
    color: "#C1C1C1",
    textAlign: "justify",
  },
  Cast_Container_Style: {
    fontSize: 16,
    textAlign: "justify",
    color: "#828282",
    paddingLeft: 15,
  },
  Description_Container_Style: {
    fontSize: 16,
    color: "white",
    textAlign: "justify",
  },
  Text_color: {
    color: "white",
  },
  Watched_Container_Style: {
    flexDirection: "row",
    columnGap: 10,
    // width: "90%",
    justifyContent: "space-between",
    alignSelf: "center",
  },
});

export default DetailScreen;
