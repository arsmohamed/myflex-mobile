import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import OverLayer from "../Assets/OverLay.png";
import { AuthActions } from "../store/Auth";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  //   const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    // navigation.navigate("NewContainer");
    console.log("Logging in with:", username, password);
  };

  const handleSignUp = () => {
    console.log("Navigating to sign-up screen");
  };
  const SignUpCntainer = (
    <View style={styles.SignUp_Cntainer_Style}>
      <Text style={styles.loginText}>SignUp</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={30} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={30} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(text) => setemail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="key" size={30} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="key" size={30} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

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
});

export default SignUp;
