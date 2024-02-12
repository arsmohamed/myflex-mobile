import { createSlice } from "@reduxjs/toolkit";
import { Signin, SingUp, loginAsGuest, Logout } from "./Actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    FailedContinue(state, action) {
      state.ShowModel = "Login_Model";
      state.errorMessage = action.payload;
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
      } else if (!isValidPassword(state.password)) {
        state.errorMessage =
          "Password must be at least 8 characters long and contain:\n- at least 1 uppercase letter,\n- 1 lowercase letter, and\n- 1 number.";
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
    SetErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsGuest.fulfilled, (state, action) => {
        // Handle fulfilled state
        console.log("Guest is logged in???");
        state.ShowModel = "MyFlex_Model";
        state.username = "";
        state.password = "";
      })
      .addCase(loginAsGuest.rejected, (state, action) => {
        // console.log("our apology an error occured in the server");
        state.errorMessage = "our apology an error occured in the server";
      })
      .addCase(Signin.fulfilled, (state, action) => {
        state.ShowModel = "MyFlex_Model";
        state.errorMessage = "";
        state.username = "";
        state.password = "";
      })
      .addCase(Signin.rejected, (state, action) => {
        state.ShowModel = "Login_Model";
        state.errorMessage = "Invalid username or password";
      })
      .addCase(SingUp.fulfilled, (state, action) => {
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
      })
      .addCase(SingUp.rejected, (state, action) => {
        state.ShowModel = "Login_Model";
        state.errorMessage = "Invalid username or password";
      })
      .addCase(Logout.fulfilled, (state, action) => {
        state.ShowModel = "Login_Model";
      })
      .addCase(Logout.rejected, (state, action) => {
        state.ShowModel = "Profile_Screen";
        state.errorMessage = "error occured to Logout";
      });
  },
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;
