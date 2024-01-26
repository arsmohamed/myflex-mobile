import { createSlice } from "@reduxjs/toolkit";

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const initialAuthState = {
  authedScreen: "Login",
  username: "",
  password: "",
  ConfirmPassword: "",
  email: "",
  ShowModel: "Login_Model",
  errorMessage: " ",
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
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
  },
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;
