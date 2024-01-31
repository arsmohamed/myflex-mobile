import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth";
import NavigationSlice from "./navigationSlice";
import MovieSlice from "./MovieList";

const store = configureStore({
  reducer: { Loggedin: AuthSlice, screen: NavigationSlice, movie: MovieSlice },
});

export default store;
