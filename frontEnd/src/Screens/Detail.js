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

const DetailScreen = ({ route }) => {
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

  return (
    <View style={styles.Container_Style}>
      {console.log(route)}
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
              <TouchableOpacity style={styles.button} onPress={() => console.log(`add to List : `)}>
                <Text style={styles.Add_Text_Style}>Add to List</Text>
              </TouchableOpacity>
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
  },
  Rate_Container_Style: {
    width: "50%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    columnGap: 10,
  },
  button: {
    width: 100,
    height: 35,
    backgroundColor: "#FFD900",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 7,
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
});

export default DetailScreen;
