// ChatScreen.js
import React, { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import MyListHeader from "../Headers/MyListHeader";
import MovieCardForm from "../Models/MovieCardModel";
import MovieCardInfo from "../Info/MovieCardInfo";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../store/navigationSlice";

const MyListScreen = () => {
  //Const
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.movie.myList);

  //Use Effoect
  useEffect(() => {
    dispatch(setScreen("MyList_Screen"));
  }, []);

  //return View
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyListHeader />
      <View style={styles.MyList_Scroll_Style}>
        <ScrollView>
          <View style={styles.MyList_Label_style}>
            <Text style={styles.MyList_Text_Style}>Watched</Text>
            <Text style={styles.MyList_Text_Style}>UnWatched</Text>
          </View>
          <View style={styles.New_Release_Container_Style}>
            {myList.map((movie) => (
              <MovieCardForm key={movie.title} props={movie} ScreenName={"MyList_Screen"} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MyList_Scroll_Style: {
    height: "75%",
  },
  MyList_Label_style: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    columnGap: 15,
    margin: 10,
  },
  MyList_Text_Style: {
    fontSize: 20,
    color: "white",
  },
  New_Release_Container_Style: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    rowGap: 15,
  },
});

export default MyListScreen;
