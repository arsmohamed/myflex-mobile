import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  auth: false,
  Logggedout: true,
  isGuest: false,
  isLoginModel: true,
  isSignUpModel: false,
  authScreen: "Login",
  username: "",
  password: "",
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    Continue(state) {
      state.auth = true;
      state.Logggedout = false;
      state.isLoginModel = false;
      state.isSignUpModel = false;
    },
    SignupModel(state) {
      state.isSignUpModel = true;
      state.isLoginModel = false;
    },
    LoginModel(state) {
      state.isSignUpModel = false;
      state.isLoginModel = true;
    },
    Join(state) {
      state.auth = true;
      state.Logggedout = false;
      state.isLoginModel = false;
      state.isSignUpModel = false;
    },
    Guest(state) {
      state.auth = true;
      state.Logggedout = false;
      state.isLoginModel = false;
      state.isSignUpModel = false;
    },
    LogOut(state) {
      state.Logggedout = false;
      state.auth = false;
      state.isLoginModel = true;
      state.isSignUpModel = false;
    },
    SetUsername(state, action) {
      state.username = action.payload;
    },
    SetPassword(state, action) {
      state.password = action.payload;
    },
    ClearCredentials(state) {
      state.username = "";
      state.password = "";
    },
  },
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;
