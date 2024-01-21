import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    navigation.navigate("NewContainer");
    console.log("Logging in with:", username, password);
  };

  const handleSignUp = () => {
    console.log("Navigating to sign-up screen");
  };

  return (
    <BlurView intensity={20} tint="dark" style={styles.c}>
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
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

        <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signupButton}>Sign Up </Text>
          </TouchableOpacity>
          <Text style={styles.signupText}>or Login as</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signupButton}>Guest</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  c: {
    flex: 1,
    // backgroundColor: "black",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 500,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
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
  },
  signupText: {
    marginRight: 10,
    color: "white",
  },
  signupButton: {
    color: "#3498db",
    fontWeight: "bold",
  },
});

export default Login;
