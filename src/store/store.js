// // store.js
// import { createStore } from "redux";
// import rootReducer from "./rootReducer";

// const store = createStore(rootReducer);

import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialScreen = {
  ScreenName: "Home",
};
const ScreenSlice = createSlice({
  name: "ScreenSelet",
  initialState: initialScreen,
  reducers: {
    HomeSelected(state) {
      state.ScreenName = "Home_Screen";
    },
    MyListSelected(state) {
      state.ScreenName = "MyList_Screen";
    },
    ProfileSelected(state) {
      state.ScreenName = "Profile_Screen";
    },
    SearchSelected(state) {
      state.ScreenName = "Search_Screen";
    },
    DetailSelected(state) {
      state.ScreenName = "Detail_Screen";
    },
  },
});
const initialAuthState = {
  auth: false,
  Logggedout: true,
  isGuest: false,
  isLoginModel: true,
  isSignUpModel: false,
  authScreen: "Login",
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
    authState(state, action) {},
  },
});
const store = configureStore({
  reducer: { Loggedin: AuthSlice.reducer, screen: ScreenSlice.reducer },
});

export const AuthActions = AuthSlice.actions;
export const ScreenAction = ScreenSlice.actions;

export default store;
