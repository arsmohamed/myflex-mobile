// ChatScreen.js
import React, {useLayoutEffect} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomHeaderLeft from "../Components/CustomHeaderLeft";

const HomeScreen = ({ navigation }) => {
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerRight: () => (
        <Ionicons
          name="search"
          size={25}
          style={{ marginRight: 10, color: "white" }}
        />
      ),
      headerLeft: () => <CustomHeaderLeft/>,
      headerStyle: {
        backgroundColor: "#0B1D33",
        borderBottomWidth: 1,
        borderBottomColor: "yellow",
      },
      headerTintColor: "red",
      tabBarStyle: {
        backgroundColor: "transparent",
      },
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: "#0B1D33" }}> 
      <Text>Chat Screen</Text>
    </View>
  );
};

export default HomeScreen;
