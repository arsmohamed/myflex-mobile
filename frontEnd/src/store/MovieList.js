import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getRecommendations = createAsyncThunk(
  "movies/getRecommendations",
  async (page, { rejectWithValue }) => {
    try {
      // Get the token from the state (assuming it is stored there)
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:5001/myFlex/api/v1/user/recommendations?page=${page}`,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  movieList: [],
  myList: [],
  updateComingMovieStates: {}, // Dictionary to store state for each movie
  loading: false,
  currentPage: 1,
};

const movieSlice = createSlice({
  name: "MovieList",
  initialState: initialState,
  reducers: {
    addToMyList: (state, action) => {
      state.myList.push(action.payload);
    },
    removeFromMyList: (state, action) => {
      const idToRemove = action.payload;
      // Find the index of the movie to remove
      const movieToRemoveIndex = state.myList.findIndex((movie) => movie.id === idToRemove);
      if (movieToRemoveIndex !== -1) {
        // Set onMyList to false for the found movie
        state.myList[movieToRemoveIndex].onMyList = false;
        // Remove the movie from the list
        state.myList.splice(movieToRemoveIndex, 1);
      }
    },
    addToMyListAndUpdate: (state, action) => {
      const moviesToAdd = action.payload;
      moviesToAdd.forEach((movieToAdd) => {
        movieToAdd.onMyList = true;
        state.myList.push(movieToAdd);
      });
    },
    updateIsWatched: (state, action) => {
      const { id, value } = action.payload;
      const movieIndex = state.myList.findIndex((movie) => movie.id === id);
      if (movieIndex !== -1) {
        state.myList[movieIndex].isWatched = value;
      }
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
        // console.log(state.movieList);
      })
      .addCase(getRecommendations.rejected, (state, action) => {
        state.loading = false;
        // Handle the error, you can add an error field to the state
      });
  },
});
export const {
  addToMyList,
  updateOnMyList,
  removeFromMyList,
  updateIsWatched,
  addToMyListAndUpdate,
} = movieSlice.actions;
export default movieSlice.reducer;
