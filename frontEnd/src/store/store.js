import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth";
import NavigationSlice from "./navigationSlice";

const store = configureStore({
  reducer: { Loggedin: AuthSlice, screen: NavigationSlice },
});

export default store;
