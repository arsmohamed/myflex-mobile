import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Add a helper function to validate email
export const validateEmail = (email) => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
// Add a helper function to validate password
export const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};
// Handle Loggingin as Guest
export const loginAsGuest = createAsyncThunk(
  "auth/loginAsGuest",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5001/myFlex/api/v1/login/guest");

      // Handle AsyncStorage here
      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
      await AsyncStorage.setItem("guest", JSON.stringify(true));

      return response.data;
    } catch (error) {
      // Return a rejection with the error payload
      return rejectWithValue(error.response.data);
    }
  },
);
// Handle Signin
export const Signin = createAsyncThunk(
  "auth/login",
  async ({ loginValue, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`http://localhost:5001/myFlex/api/v1/login`, {
        loginValue,
        password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
      return response;
    } catch (error) {
      console.log(`Login Error: ${error.response.data}`);
      return rejectWithValue(error.response.data);
    }
  },
);
// Handle SignUp
export const SingUp = createAsyncThunk(
  "auth/signup",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5001/myFlex/api/v1/signgup", {
        username,
        email,
        password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
      return response;
    } catch (error) {
      console.log(`signUp Error: ${error.response.data}`);
      return rejectWithValue(error.response.data);
    }
  },
);
// Handle Logout
export const Logout = createAsyncThunk("auth/logout", (onSuccess, { rejectWithValue }) => {
  try {
    AsyncStorage.clear();
    return console.log("Sucessed to loggout!");
  } catch {
    return rejectWithValue("Error Occured Logging out !");
  }
});
