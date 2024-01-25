// navigationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeScreen: "Home_Screen", // Initial active screen
  DetailReturnScreen: "Home",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setScreen: (state, action) => {
      state.activeScreen = action.payload;
    },
    DetailScreen: (state, action) => {
      state.DetailReturnScreen = action.payload;
      console.log(`coming from screen ${state.DetailReturnScreen}`);
    },
  },
});

export const { setScreen } = navigationSlice.actions;
export default navigationSlice.reducer;
