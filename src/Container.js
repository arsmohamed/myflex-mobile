// App.js
import React from "react";
import { View } from "react-native";

import { useSelector } from "react-redux";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import ScreenContainer from "./ScreenContainer";

export default function Container() {
  const isAuth = useSelector((state) => state.Loggedin.auth);
  const isLoginModel = useSelector((state) => state.Loggedin.isLoginModel);
  const isSignUpModel = useSelector((state) => state.Loggedin.isSignUpModel);

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      {isAuth && <ScreenContainer />}
      {isLoginModel && <Login />}
      {isSignUpModel && <SignUp />}
    </View>
  );
}
