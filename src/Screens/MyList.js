// ChatScreen.js
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { changeScreen } from "../store/actions/NavigationActions";
import MyListHeader from "../Headers/MyListHeader";
import MovieCardForm from "../Forms/MovieCardForm";
import MovieCardInfo from "../Info/MovieCardInfo";
import { useDispatch } from "react-redux";

const MyListScreen = () => {
  const dispatch = useDispatch();

  const handleIconClick = () => {
    dispatch(changeScreen("NewMyListScreen"));
  };

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
            {MovieCardInfo.map((cardInfo) => (
              <MovieCardForm key={cardInfo.id} props={cardInfo} />
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
