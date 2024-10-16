// ChatScreen.js
import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import SpotLightModel from "../Models/SpotLightModel";
import { getRecommendations } from "../store/Actions";
import MovieCardForm from "../Models/MovieCardModel";
import { setScreen } from "../store/navigationSlice";
import HomeCard from "../Models/MovieCardModel";
import HomeHeader from "../Headers/HomeHeader";

const Home = ({ navigation }) => {
  // Using Dispatch 
  const dispatch = useDispatch();
  const MovieList = useSelector((state) => state.movie.movieList);
  const SpotLightList = useSelector(state => state.movie.SpotLightList);
  const [recommendedPageNumber, setRecommendedPageNumber] = useState(1)
  const [loading, setLoading] = useState(true);
  const isBackArrowDisabled = recommendedPageNumber !== 1;

  // Create a reference
  const scrollViewRef = useRef(null);
  const flatListRef = useRef(null); // Reference for FlatList
  const currentIndex = useRef(0); // Current index for spotlight rotation

  // --------------------------------------------------- UseEffect -------------------------------------------------------
  // updating the store and re-rending the page
  useEffect(() => {
    dispatch(setScreen("Home_Screen"));
    dispatch(getRecommendations(recommendedPageNumber));

    // Scroll back to the top when the recommendedPageNumber changes
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }

    // Display loading for 0.5 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 10 seconds
    }, 500); // 0.5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [recommendedPageNumber]); // Run effect when recommendedPageNumber changes

  // Function for rotating the spotlight items
  useEffect(() => {
    const length = SpotLightList.length;
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % length; // Increment and wrap around index
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          animated: true,
          index: currentIndex.current,
          viewPosition: 0.5, // Center the item in the view
        });
      }
    }, 3000); // Change the item every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [SpotLightList]);

  // --------------------------------------------------- Functions -------------------------------------------------------
  //Prev Page 
  const PrevPage = () => {
    if (!isBackArrowDisabled) return;
    setRecommendedPageNumber(prev => Math.max(prev - 1, 1)); // Decrease but not below 1
  }
  //Next Page 
  const NextPage = () => (
    setRecommendedPageNumber(prev => prev + 1)
  )

  // --------------------------------------------------- Components -------------------------------------------------------
  //spotlight container 
  const spotLightContainer = <FlatList
    // data={MovieList.slice(0, 5)}
    ref={flatListRef}
    data={SpotLightList}
    renderItem={({ item, index }) => (
      <SpotLightModel props={{ ...item, page: (index + 1).toString() }} />
    )}
    horizontal
    showsHorizontalScrollIndicator
    pagingEnabled
    bounces={false}
    keyExtractor={(item) => item.id.toString()}
  />

  //Recommended List Container 
  const RecommendedListContainer = <FlatList
    data={MovieList}
    // data={MovieInfo}
    // renderItem={({ item }) => <Text style={styles.Text_Style}>Recommendation</Text>}
    renderItem={({ item }) => <View style={styles.Recommendation_Container_Style}>
      <HomeCard props={item} ScreenName={"Home_Screen"} /></View>}
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    bounces={false}
    keyExtractor={(item) => item.id}
  />


  //movies list container 
  const movieListContainer = <View style={styles.New_Release_Container_Style}>
    {MovieList.map((cardInfo) => (
      <MovieCardForm key={cardInfo.id} props={cardInfo} ScreenName={"Home_Screen"} />
    ))}
  </View>

  //page controlling buttons 
  const PagesControl = <View style={styles.Change_Recommendation_Container_Style}>
    <TouchableOpacity
      onPress={PrevPage}
      disabled={isBackArrowDisabled && false}
      style={{ opacity: isBackArrowDisabled ? 1 : 0.5 }} // Optional: change the opacity for visual feedback
      activeOpacity={isBackArrowDisabled ? 1 : 0.7}
    >
      <Ionicons
        name="arrow-back-circle-outline"
        size={50}
        color={isBackArrowDisabled ? "#FFD900" : "white"}
      />
    </TouchableOpacity>
    <Text style={styles.Children_Text_Style}>{recommendedPageNumber}</Text>
    <TouchableOpacity
      onPress={NextPage}
    >
      <Ionicons
        name="arrow-forward-circle-outline"
        size={50}
        color="#FFD900"
      />
    </TouchableOpacity>
  </View>

  // --------------------------------------------------- returning View -------------------------------------------------------
  return (
    <View style={styles.Main_Contain_Style}>
      <HomeHeader navigation={navigation} />
      {loading ? (
        // Show loading indicator while loading
        <View style={styles.loading_Container_Style}>
          <ActivityIndicator size="large" color="#FFD900" />
          <Text style={styles.loading_Text_Style}>Loading...</Text>
        </View>
      ) : (
        <ScrollView ref={scrollViewRef} >
          <View style={styles.Scroll_Container_Style}>
            {spotLightContainer}
            <Text style={styles.Text_Style}>Recommendation</Text>
            {RecommendedListContainer}
            <Text style={styles.Text_Style}>New Release</Text>
            {movieListContainer}
            {PagesControl}
          </View>
        </ScrollView>
      )}
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
    marginBottom: 5
  },
  Scroll_Container_Style: {
    rowGap: 25,
    flexDirection: "column",
    // borderWidth: 1,
    // borderColor: "yellow",
  },
  loading_Container_Style: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  loading_Text_Style: {
    color: "white",
    marginTop: 10,
  },
  Text_Style: {
    color: "white",
    fontSize: 22,
    marginLeft: 5,
  },
  Recommendation_Container_Style: {
    marginRight: 5,
    marginLeft: 10,
    height: 200
  },
  New_Release_Container_Style: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    rowGap: 25,
    columnGap: 5,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "green",
  },
  Change_Recommendation_Container_Style: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 10,
  },
  Children_Text_Style: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
  },
});
