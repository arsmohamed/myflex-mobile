// ChatScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { changeScreen } from "../store/actions/NavigationActions";
import CustomHeaderLeft from "../Components/Custom_Home_Header";
import VCard from "../Components/V-Card";
import IMBD from "../Assets/IMBD.png";
import HP from "../Assets/HR.jpeg";
const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleIconClick = () => {
    dispatch(changeScreen("NewChatScreen"));
  };

  return (
    <View style={styles.Main_Contain_Style}>
      <View style={styles.First_Container_Style}>
        <View style={styles.Top_Bar_Container_Style}>
          <CustomHeaderLeft navigation={navigation} />
        </View>
        <View style={styles.Canvas_Container_Style}>
          <Text style={{ color: "white" }}>Home Page</Text>
          {/* <VCard img={HP} rank={"9.7"} imbd={IMBD} name={"Harry Potter"} /> */}
        </View>
      </View>
      <View style={styles.second_Container_Style}>
        {/* <Ionicons name="search" size={55} style={{ color: 'white' }} /> */}
      </View>
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
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    zIndex: 1,
    // borderWidth: 1,
    // borderColor: "yellow",
  },
  second_Container_Style: {
    flex: 3,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    height: "10%",
    width: "100%",
    zIndex: 20,
    // borderWidth: 1,
    // borderColor: "white",
  },
  Top_Bar_Container_Style: {
    height: "12%",
    width: "100%",
    flexDirection: "column-reverse",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    // borderWidth: 3,
    // borderColor: "white",
  },
  Canvas_Container_Style: {
    height: "88%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
});
