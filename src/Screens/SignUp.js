import React, { useState, useEffect } from "react";
import { setScreen } from "../store/navigationSlice";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import OverLayer from "../Assets/OverLay.png";
import { AuthActions } from "../store/Auth";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.Loggedin.username);
  const password = useSelector((state) => state.Loggedin.password);
  const ConfirmPassword = useSelector((state) => state.Loggedin.ConfirmPassword);
  const email = useSelector((state) => state.Loggedin.email);
  const errorMessage = useSelector((state) => state.Loggedin.errorMessage);

  useEffect(() => {
    dispatch(setScreen("Signup_Screen"));
  }, []);

  const SignUpCntainer = (
    <View style={styles.SignUp_Cntainer_Style}>
      <Text style={styles.loginText}>SignUp</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={30} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
          onChangeText={(value) => dispatch(AuthActions.SetUsername(value))}
          value={username}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={30} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(value) => dispatch(AuthActions.SetEmail(value))}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="key" size={30} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          // secureTextEntry={true}
          onChangeText={(value) => dispatch(AuthActions.SetPassword(value))}
          value={password}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="key" size={30} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="white"
          // secureTextEntry={true}
          onChangeText={(value) => dispatch(AuthActions.SetConfirmPassword(value))}
          value={ConfirmPassword}
        />
      </View>
      <Text style={styles.Error_Style}>{errorMessage && errorMessage}</Text>
      <TouchableOpacity style={styles.continueButton} onPress={() => dispatch(AuthActions.Join())}>
        <Text style={styles.buttonText}>Join</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Try the app using our </Text>
        <TouchableOpacity onPress={() => dispatch(AuthActions.Guest())}>
          <Text style={styles.signupButton}>Guest </Text>
        </TouchableOpacity>
        {/* <Text style={styles.signupText}>account.</Text> */}
        <Text style={styles.signupText}>account.</Text>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already have an account? </Text>

        <TouchableOpacity onPress={() => dispatch(AuthActions.LoginModel())}>
          <Text style={styles.signupButton}>Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.Layer_style}>
      <Image source={OverLayer} style={styles.Main_Image_Style} />
      <BlurView intensity={40} tint="dark" style={styles.Blur_Container_Style}>
        {SignUpCntainer}
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  Layer_style: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "black",
  },
  Blur_Container_Style: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 500,
  },
  SignUp_Cntainer_Style: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#31302E",
  },
  loginText: {
    fontSize: 26,
    marginBottom: 20,
    color: "white",
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 1,
  },
  input: {
    width: "80%",
    height: 40,
    paddingLeft: 10,
    fontSize: 20,
    color: "white",
  },
  icon: {
    marginRight: 10,
  },
  continueButton: {
    // backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "#FFD900",
    fontSize: 25,
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
    width: "100%",
  },
  signupText: {
    color: "white",
    alignSelf: "flex-start",
  },
  signupButton: {
    color: "#3498db",
    fontWeight: "bold",
  },
  Main_Image_Style: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    zIndex: 1,
  },
  Error_Style: {
    fontSize: 14,
    color: "#FF3B3B",
    alignSelf: "flex-start",
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default SignUp;
