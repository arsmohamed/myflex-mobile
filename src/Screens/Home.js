// ChatScreen.js
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { changeScreen } from "../store/actions/NavigationActions";
import SpotLightContainer from "../Components/SpotLightContainer";
import CustomHeader from "../Components/Custom_Home_Header";
import SlideInfo from "../Info/SlideInfo";
import { useDispatch } from "react-redux";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleIconClick = () => {
    dispatch(changeScreen("NewChatScreen"));
  };

  const MovieContainer = (
    <View style={styles.Movie_Container_Style}>
      <Text style={{ color: "white" }}>Home Page</Text>
    </View>
  );
  const BackGroundLayer = (
    <View style={styles.Back_Ground_Layer_Style}>
      <FlatList
        data={SlideInfo}
        renderItem={({ item }) => <SpotLightContainer props={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
      />
      {MovieContainer}
    </View>
  );

  return (
    <View style={styles.Main_Contain_Style}>
      <View style={styles.First_Container_Style}>
        <CustomHeader navigation={navigation} />
        {BackGroundLayer}
      </View>
      {/* <View style={styles.second_Container_Style}></View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Main_Contain_Style: {
    flex: 1,
    backgroundColor: "grey",
    flexDirection: "column",
  },
  First_Container_Style: {
    // flex: 2,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    zIndex: 1,
    // borderWidth: 1,
    // borderColor: "yellow",
  },
  // second_Container_Style: {
  //   flex: 3,
  //   backgroundColor: "transparent",
  //   position: "absolute",
  //   bottom: 0,
  //   height: "10%",
  //   width: "100%",
  //   zIndex: 20,
  //   // borderWidth: 1,
  //   // borderColor: "white",
  // },
  Back_Ground_Layer_Style: {
    position: "absolute",
    top: 0,
    left: 0,
    // width: "100%",
    height: "100%",
    // backgroundColor: "yellow",
    zIndex: 1,
  },
  Movie_Container_Style: {
    // flex: 2,
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
});
