import {
  addToMyList,
  updateOnMyList,
  removeFromMyList,
  addToMyListAndUpdate,
} from "../store/MovieList";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import DetailHeader from "../Headers/DetailHeader";
import React, { useState, useEffect } from "react";
import IMBD from "../Assets/IMBD.png";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

const DetailScreen = ({ route }) => {
  // ---------------------------------  Const ------------------------------------------------------
  const dispatch = useDispatch();
  const { title, screen_Name, overview, poster_path, vote_average, popularity, onMyList, id } =
    route.params;

  // });
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const [isWatched, setIsWatched] = useState(route.params.isWatched);
  const [rerenderKey, setRerenderKey] = useState(0);
  // ---------------------------------  Functions ------------------------------------------------------
  // Function to handle adding to My List
  const handleAddToMyList = () => {
    dispatch(addToMyList(route.params));
    setRerenderKey((prevKey) => prevKey + 1); // Increment the key to trigger rerender
  };

  // Function to handle removing from My List
  const handleRemoveFromMyList = () => {
    dispatch(removeFromMyList(id));
    setRerenderKey((prevKey) => prevKey + 1); // Increment the key to trigger rerender
  };
  const MYLIST_Container = onMyList ? (
    <TouchableOpacity style={styles.button} onPress={handleRemoveFromMyList}>
      <Ionicons name={"remove-circle"} size={30} color={"black"} />
      <Text style={styles.Add_Text_Style}>Sub My List </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.button} onPress={handleAddToMyList}>
      <Ionicons name={"add-circle"} size={30} color={"black"} />
      <Text style={styles.Add_Text_Style}> Add My List </Text>
    </TouchableOpacity>
  );
  // ---------------------------------  Functions ------------------------------------------------------
  return (
    <View style={styles.Container_Style}>
      <DetailHeader ReturnedScreen={screen_Name} />
      <ScrollView>
        <View style={styles.Detail_Container_Style}>
          <Image source={{ uri: `${baseUrl}${poster_path}` }} style={styles.Image_Style} />
          <View style={styles.Info_Style}>
            <Text style={[styles.Title_Style, styles.Text_color]}>{title}</Text>
            <View style={styles.First_Container_Style}>
              <View style={styles.Rate_Container_Style}>
                <Image source={IMBD} />
                <Text style={[styles.Rating_Style, styles.Text_color]}>
                  {vote_average.toFixed(1)} / 10
                </Text>
              </View>

              {MYLIST_Container}
            </View>
            {onMyList && (
              <View style={styles.First_Container_Style}>
                <View style={styles.Watched_Container_Style}>
                  <Ionicons name={isWatched ? "eye" : "eye-off"} size={30} color={"white"} />
                  <Text style={styles.Watched_Text_Style}>
                    {isWatched ? "Watched" : "unWatched"}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.Watched_button}
                  onPress={() => console.log("Clicked")}
                >
                  <Ionicons
                    name={isWatched ? "add-circle" : "remove-circle"}
                    size={30}
                    color={"black"}
                  />
                  <Text style={styles.Add_Text_Style}>Watch list</Text>
                </TouchableOpacity>
              </View>
            )}

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

// ---------------------------------  Style ------------------------------------------------------
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
    // width: 110,
    width: 210,
    height: 35,
    backgroundColor: "#FFD900",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 15,
    padding: 2,
  },
  Watched_button: {
    width: 170,
    height: 35,
    backgroundColor: "#FFD900",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 15,
    padding: 2,
  },
  Watched_Container_Style: {
    width: 130,
    height: 35,
    backgroundColor: "#FFD900",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 15,
    padding: 2,
  },
  Add_Text_Style: {
    fontSize: 18,
    alignSelf: "center",
    justifyContent: "center",
  },
  Watched_Text_Style: {
    fontSize: 18,
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
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
