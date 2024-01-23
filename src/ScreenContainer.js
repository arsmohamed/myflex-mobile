import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//Screens Imported
import MovieCardForm from "./Models/MovieCardModel";
import { setScreen } from "./store/navigationSlice";
import SearchScreen from "./Screens/SearchScreen";
import ProfileScreen from "./Screens/Profile";
import MylistScreen from "./Screens/MyList";
import DetailScreen from "./Screens/Detail";
import { useDispatch } from "react-redux";
import HomeScreen from "./Screens/Home";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Initial" component={HomeScreen} />
      <Stack.Screen name="Search_Screen" component={SearchScreen} />
      <Stack.Screen name="Detail_Screen" component={DetailScreen} />
      <Stack.Screen name="MovieCardForm" component={MovieCardForm} />
    </Stack.Navigator>
  );
}

const ScreenContainer = () => {
  const dispatch = useDispatch();
  const ActiveScreen = useSelector((state) => state.screen.activeScreen);

  //style for the tab navigation
  const screenOptions = ({ route }) => ({
    headerShown: false, //it shows upper name of the screen
    tabBarShowLabel: false, // it shows the names of label of each screen
    tabBarStyle: {
      position: "absolute",
      padding: 10,
      backgroundColor: "#31302E",
      overflow: "hidden",
      borderTopWidth: 1,
      borderTopColor: "white",
      display:
        ActiveScreen === "Search_Screen" || ActiveScreen === "Detail_Screen"
          ? "none"
          : ActiveScreen === "MyList_Screen" ||
              ActiveScreen === "Profile_Screen" ||
              ActiveScreen === "Home_Screen"
            ? "flex"
            : "flex",
      // borderTopEndRadius: 45,
      // display: SearchScreen === "Search_Screen" ? "none" : "flex",
    },
    tabBarIcon: ({ focused }) => {
      let iconName;
      if (route.name === "Home") {
        iconName = "home";
      } else if (route.name === "Mylist") {
        iconName = "play-circle";
      } else if (route.name === "Profile") {
        iconName = "person";
      }
      return (
        <View style={styles.Icon_Container_Style}>
          <Ionicons
            name={iconName}
            size={25}
            style={{ marginRight: 5, color: focused ? "#FFD900" : "white" }}
          />
          <Text style={{ color: focused ? "#FFD900" : "white", fontSize: 12 }}>{route.name}</Text>
        </View>
      );
    },
    // tabBarLabelStyle: {
    //   color: route.state?.index === route.index ? 'white' : '#D68D4A', // Set the color to match Ionicons
    //   fontSize: 12,
    // },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          listeners={{
            tabPress: (e) => {
              dispatch(setScreen("Home_Screen"));
            },
          }}
        />
        <Tab.Screen
          name="Mylist"
          component={MylistScreen}
          listeners={{
            tabPress: (e) => {
              dispatch(setScreen("MyList_Screen"));
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          listeners={{
            tabPress: (e) => {
              dispatch(setScreen("Profile_Screen"));
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  Icon_Container_Style: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
