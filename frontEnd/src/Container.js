// App.js
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import ScreenContainer from "./ScreenContainer";

export default function Container() {
  const ShowModel = useSelector((state) => state.Loggedin.ShowModel);

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      {ShowModel === "MyFlex_Model" && <ScreenContainer />}
      {ShowModel === "Login_Model" && <Login />}
      {ShowModel === "SignUp_Model" && <SignUp />}
    </View>
  );
}
