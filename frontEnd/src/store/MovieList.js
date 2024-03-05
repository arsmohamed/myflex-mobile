import { createSlice } from "@reduxjs/toolkit";
import { getRecommendations, searhcMovie } from "./Actions";

const initialState = {
  movieList: [],
  myList: [],
  SearchValue: "",
  searchList: [],
  // Dictionary to store state for each movie, it is not used else where but here to help add other values to each movie
  updateComingMovieStates: {},
  loading: false,
  currentPage: 1,
};

const movieSlice = createSlice({
  name: "MovieList",
  initialState: initialState,
  reducers: {
    addToMyList: (state, action) => {
      const movie = action.payload;
      // movie.onMyList = true;
      // state.myList.push(movie);

      const movieToUpdate = state.movieList.find((innerMovie) => innerMovie.id === movie.id);
      if (movieToUpdate) movieToUpdate.onMyList = true;
    },
    removeFromMyList: (state, action) => {
      const movie = action.payload;
      // Find the index of the movie to remove
      const movieToUpdate = state.movieList.find((innerMovie) => innerMovie.id === movie.id);

      if (movieToUpdate) movieToUpdate.onMyList = false;
    },
    updateIsWatched: (state, action) => {
      const { id, value } = action.payload;
      const movieIndex = state.myList.findIndex((movie) => movie.id === id);
      if (movieIndex !== -1) {
        state.myList[movieIndex].isWatched = value;
      }
    },
    setSearchValue: (state, action) => {
      const value = action.payload;
      state.SearchValue = value;
    },
    clearSearchValue: (state) => {
      state.SearchValue = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecommendations.fulfilled, (state, action) => {
        state.loading = false;
        // Assuming action.payload is an array of movie data
        const updatedMovieList = action.payload.map((movieData) => {
          // Check if the movie state exists, if not, initialize it
          if (!state.updateComingMovieStates[movieData.id]) {
            state.updateComingMovieStates[movieData.id] = {
              onMyList: false,
              isWatched: false,
            };
          }
          // Add onMyList and isWatched fields to the movie data
          return {
            ...movieData,
            onMyList: state.updateComingMovieStates[movieData.id].onMyList,
            isWatched: state.updateComingMovieStates[movieData.id].isWatched,
          };
        });
        state.movieList = updatedMovieList;
      })
      .addCase(getRecommendations.rejected, (state, action) => {
        state.loading = false;
        // Handle the error, you can add an error field to the state
      })
      .addCase(searhcMovie.fulfilled, (state, action) => {
        state.loading = false;
        const searchResult = action.payload.data;
        state.searchList = searchResult;
      });
  },
});
export const {
  addToMyList,
  updateOnMyList,
  removeFromMyList,
  updateIsWatched,
  addToMyListAndUpdate,
  setSearchValue,
  clearSearchValue,
} = movieSlice.actions;
export default movieSlice.reducer;
