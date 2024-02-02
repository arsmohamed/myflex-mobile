import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const LOGIN_GUEST_URL = "http://localhost:5001/myFlex/api/v1/login/guest";

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export const loginAsGuest = createAsyncThunk(
  "auth/loginAsGuest",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN_GUEST_URL);

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

const initialState = {
  ShowModel: "Login_Model",
  SecurePassword: true,
  SecureConfirmPassword: true,
  username: "",
  password: "",
  ConfirmPassword: "",
  email: "",
  errorMessage: " ",
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    Guest(state) {
      state.ShowModel = "MyFlex_Model";
      state.username = "";
      state.password = "";
    },
    Continue(state) {
      if (!state.username || !state.password) {
        state.errorMessage = "Username or password not provided.";
      } else {
        state.ShowModel = "MyFlex_Model";
        state.errorMessage = "";
        state.username = "";
        state.password = "";
      }
    },
    SignupModel(state) {
      state.ShowModel = "SignUp_Model";
      state.errorMessage = "";
      state.username = "";
      state.password = "";
    },
    LoginModel(state) {
      state.ShowModel = "Login_Model";
      state.errorMessage = "";
      state.username = "";
      state.password = "";
    },
    Join(state) {
      if (!state.username || !state.ConfirmPassword || !state.email || !state.password) {
        state.errorMessage = "Username or email or password not provided.";
      } else if (!validateEmail(state.email)) {
        state.errorMessage = "Invalid email format.";
      } else if (state.password !== state.ConfirmPassword) {
        state.errorMessage = "Password and confirmed password do not match.";
      } else {
        state.ShowModel = "MyFlex_Model";
        state.errorMessage = "";
        state.username = "";
        state.email = "";
        state.password = "";
        state.ConfirmPassword = "";
      }
    },
    LogOut(state) {
      state.ShowModel = "Login_Model";
    },
    SetUsername(state, action) {
      state.username = action.payload;
      state.errorMessage = "";
    },
    SetEmail(state, action) {
      state.email = action.payload;
      state.errorMessage = "";
    },
    SetPassword(state, action) {
      state.password = action.payload;
      state.errorMessage = "";
    },
    SetConfirmPassword(state, action) {
      state.ConfirmPassword = action.payload;
      state.errorMessage = "";
    },
    setSecurePassword(state) {
      state.SecurePassword = !state.SecurePassword;
    },
    setSecureConfirmPassword(state) {
      state.SecureConfirmPassword = !state.SecureConfirmPassword;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsGuest.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(loginAsGuest.fulfilled, (state, action) => {
        // Handle fulfilled state
        console.log("Guest is logged in???");
        state.ShowModel = "MyFlex_Model";
        state.username = "";
        state.password = "";
      })
      .addCase(loginAsGuest.rejected, (state, action) => {
        // Handle rejected state
        state.errorMessage = action.payload;
        // Or handle the error as needed
      });
  },
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;
