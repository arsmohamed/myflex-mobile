import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../store/navigationSlice";
import React, { useState, useEffect } from "react";
import OverLayer from "../Assets/OverLay.png";
import { AuthActions } from "../store/Auth";
import { BlurView } from "expo-blur";
const Login = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.Loggedin.username);
  const password = useSelector((state) => state.Loggedin.password);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", username, password);
  };

  const handleSignUp = () => {
    console.log("Navigating to sign-up screen");
  };
  useEffect(() => {
    dispatch(setScreen("Login_Screen"));
  }, []);

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
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(value) => dispatch(AuthActions.SetPassword(value))}
          value={password}
        />
      </View>
      <TouchableOpacity
        style={styles.continueButton}
        disabled={!username || !password}
        onPress={() => dispatch(AuthActions.Continue())}
      >
        <Text style={[styles.buttonText, { color: !username || !password ? "grey" : "#FFD900" }]}>
          Continue
        </Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => dispatch(AuthActions.SignupModel())}>
          <Text style={styles.signupButton}>Sign Up </Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>or Login as </Text>
        <TouchableOpacity onPress={() => dispatch(AuthActions.Guest())}>
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
