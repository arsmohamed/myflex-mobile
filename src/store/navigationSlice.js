// navigationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeScreen: "Home", // Initial active screen
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setScreen: (state, action) => {
      state.activeScreen = action.payload;
    },
  },
});

export const { setScreen } = navigationSlice.actions;
export default navigationSlice.reducer;
