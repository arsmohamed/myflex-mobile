// ChatScreen.js
import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { changeScreen } from "../store/actions/NavigationActions";
import SpotLightContainer from "../Components/SpotLightContainer";
import CustomHeader from "../Components/Custom_Home_Header";
import SlideInfo from "../Info/SlideInfo";
import { useDispatch } from "react-redux";
import VCard from "../Components/V-Card";
import VCardInfo from "../Info/VCardInfo";
import HR1 from "../Assets/HR.jpeg";
import IMBD from "../Assets/IMBD.png";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleIconClick = () => {
    dispatch(changeScreen("NewChatScreen"));
  };

  return (
    <View style={styles.Main_Contain_Style}>
      <CustomHeader navigation={navigation} />
      <ScrollView>
        <View style={styles.Scroll_Container_Style}>
          <FlatList
            data={SlideInfo}
            renderItem={({ item }) => <SpotLightContainer props={item} />}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
          />
          <Text style={styles.Text_Style}>Recommendation</Text>
          <FlatList
            data={VCardInfo}
            renderItem={({ item }) => <VCard props={item} />}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            keyExtractor={(item) => item.id}
          />
          <Text style={styles.Text_Style}>New Release</Text>
          <FlatList
            data={VCardInfo}
            renderItem={({ item }) => <VCard props={item} />}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Main_Contain_Style: {
    flex: 1,
    backgroundColor: "black",
    zIndex: 1,
    paddingBottom: "20%",
  },
  Scroll_Container_Style: {
    rowGap: 25,
    flexDirection: "column",
    // borderWidth: 1,
    // borderColor: "yellow",
  },
  Text_Style: {
    color: "white",
    fontSize: 22,
  },
});
