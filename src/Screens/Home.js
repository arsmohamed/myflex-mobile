// ChatScreen.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { changeScreen } from "../store/actions/NavigationActions";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleIconClick = () => {
    dispatch(changeScreen("NewChatScreen"));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        // borderWidth: 1,
        // borderColor: 'white',
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flex: 2,
          // backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
          // justifyContent: 'flex-end',
          borderWidth: 1,
          borderColor: "yellow",
          height: "100%",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Text style={{ color: "white" }}>Home asdjfadjsfhkjasdhflkjashflkjdh Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search_Screen")} style={{ marginRight: 10 }}>
          <Ionicons name="search" size={55} style={{ color: "white" }} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 0,
          height: "10%",
          width: "100%",
          zIndex: 20,
          borderWidth: 1,
          borderColor: "white",
        }}
      >
        {/* <Ionicons name="search" size={55} style={{ color: 'white' }} /> */}
      </View>
    </View>
  );
};

export default Home;
