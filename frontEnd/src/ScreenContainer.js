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
import DetailScreen from "./Screens/Detail";
import MylistScreen from "./Screens/MyList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import HomeScreen from "./Screens/Home";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Home_Screen" component={HomeScreen} />
      <Stack.Screen name="Search_Screen" component={SearchScreen} />
      <Stack.Screen name="Detail_Screen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
const MyListStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="MyList_Screen" component={MylistScreen} />
      <Stack.Screen name="Detail_Screen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
const ScreenContainer = () => {
  const dispatch = useDispatch();
  const ActiveScreen = useSelector((state) => state.screen.activeScreen);
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
      display: ActiveScreen === "Detail_Screen" ? "none" : "flex",
      // ActiveScreen === "Search_Screen" || ActiveScreen === "Detail_Screen" ? "none" : "flex",
      // borderTopEndRadius: 45,
    },
    tabBarIcon: ({ focused }) => {
      let iconName;
      if (route.name === "Home") {
        iconName = "home";
      } else if (route.name === "MyList") {
        iconName = "play-circle";
      } else if (route.name === "SearchScreen") {
        iconName = "search";
      } else if (route.name === "Profile") {
        iconName = "person";
      }
      return (
        <View style={styles.Icon_Container_Style}>
          <Ionicons name={iconName} size={30} style={{ color: focused ? "#FFD900" : "white" }} />
          {/* <Text style={{ color: focused ? "#FFD900" : "white", fontSize: 12 }}>{route.name}</Text> */}
        </View>
      );
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} unmountOnBlur={true}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          listeners={{
            tabPress: () => dispatch(setScreen("Home_Screen")),
          }}
        />

        <Tab.Screen
          name="MyList"
          component={MyListStack}
          listeners={{
            tabPress: () => dispatch(setScreen("MyList_Screen")),
          }}
        />
        {/* <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          listeners={{
            tabPress: () => dispatch(setScreen("Search_Screen")),
          }}
        /> */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          listeners={{
            tabPress: () => dispatch(setScreen("Profile_Screen")),
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
