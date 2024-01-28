import { createSlice } from "@reduxjs/toolkit";

const initialMovieListState = {
  movieList: [],
};

const movieSlice = createSlice({
  name: "MovieList",
  initialState: initialMovieListState,
  reducers: {
    addMovieCards(state, action) {
      state.movieList.push(action.payload);
    },
  },
});
export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;
