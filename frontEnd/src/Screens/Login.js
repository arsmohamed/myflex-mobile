import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Signin, loginAsGuest } from "../store/Actions";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../store/navigationSlice";
import OverLayer from "../Assets/OverLay.png";
import { AuthActions } from "../store/Auth";
import React, { useEffect } from "react";
import { BlurView } from "expo-blur";

const Login = () => {
  const dispatch = useDispatch();
  const { username, password, errorMessage, SecurePassword } = useSelector(
    (state) => state.Loggedin,
  );
  useEffect(() => {
    dispatch(setScreen("Login_Screen"));
  }, []);

  // Handle the "Guest" button press
  const handleLoginAsGuest = async () => {
    try {
      await dispatch(loginAsGuest());
    } catch (error) {
      // Handle error if needed
      console.error(error);
    }
  };
  // Handle the "Continue" button press
  const handleContinue = async () => {
    if (username.trim() === "" || password.trim() === "") {
      dispatch(AuthActions.SetErrorMessage("Username and password are required."));
    } else {
      await dispatch(
        Signin({
          loginValue: username,
          password: password,
        }),
      );
    }
  };

  const LoginContainer = (
    <View style={styles.Login_container_Style}>
      <Text style={styles.loginText}>Login</Text>
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
        <Ionicons name="key" size={30} color="white" style={styles.icon} />
        <TextInput
          style={styles.password}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={SecurePassword}
          onChangeText={(value) => dispatch(AuthActions.SetPassword(value))}
          value={password}
        />
        <TouchableOpacity onPress={() => dispatch(AuthActions.setSecurePassword())}>
          <Ionicons
            name={SecurePassword ? "eye-off-outline" : "eye-outline"}
            size={30}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.Error_Style}>{errorMessage && errorMessage}</Text>
      <TouchableOpacity style={styles.buttonText} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => dispatch(AuthActions.SignupModel())}>
          <Text style={styles.signupButton}>Sign Up </Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>or Login as </Text>
        <TouchableOpacity onPress={handleLoginAsGuest}>
          <Text style={styles.signupButton}>Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.Layer_style}>
      <Image source={OverLayer} style={styles.Main_Image_Style} />
      <BlurView intensity={40} tint="dark" style={styles.Blur_Container_Style}>
        {LoginContainer}
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
  Main_Image_Style: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    zIndex: 1,
  },
  Login_container_Style: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#31302E",
    width: "90%",
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
    color: "white",
    paddingLeft: 10,
    fontSize: 20,
  },
  password: {
    width: "70%",
    height: 40,
    color: "white",
    paddingLeft: 10,
    fontSize: 20,
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
    fontSize: 25,
    color: "#FFD900",
  },
  Error_Style: {
    fontSize: 14,
    color: "#FF3B3B",
    alignSelf: "flex-start",
    marginBottom: 10,
    marginLeft: 10,
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signupText: {
    color: "white",
  },
  signupButton: {
    color: "#3498db",
    fontWeight: "bold",
  },
});

export default Login;
