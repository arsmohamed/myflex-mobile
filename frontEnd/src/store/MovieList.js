import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import HR1 from "../Assets/HR.jpeg";
import HR2 from "../Assets/HP2.jpeg";
import HR3 from "../Assets/HP3.jpeg";
import HR4 from "../Assets/HP1.jpeg";
import HR5 from "../Assets/HP5.jpeg";
import IMBD from "../Assets/IMBD.png";
import API from "../API/API";

const initialState = {
  movieList: [],
  myList: [],
  movieStates: {}, // Dictionary to store state for each movie
  // AddToMyList: false,
  // isWatched: false,
  loading: false,
  currentPage: 1,
};
export const getRecommendations = createAsyncThunk(
  "movies/getRecommendations",
  async (page, { getState, rejectWithValue }) => {
    try {
      // Get the token from the state (assuming it is stored there)
      // const token = getState().auth.token;
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:5001/myFlex/api/v1/user/recommendations?page=${page}`,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      // console.log(response);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const movieSlice = createSlice({
  name: "MovieList",
  initialState: initialState,
  reducers: {
    initializeMovieState: (state, action) => {
      const { movieId } = action.payload;
      // Check if the movie state exists, if not, initialize it
      if (!state.movieStates[movieId]) {
        state.movieStates[movieId] = {
          onMyList: false,
          isWatched: false,
        };
      }
    },
    // New reducer to delete MovieDetail if onMyList is false
    deleteMovieDetailIfNotOnMyList: (state, action) => {
      const { movieId } = action.payload;

      // Check if the movie state exists
      if (state.movieStates[movieId]) {
        // Check if onMyList is false, then delete the movie state
        if (state.movieStates[movieId].onMyList) {
          delete state.movieStates[movieId];
        }
      }
    },
    setOnMyList: (state, action) => {
      const { movieId, movieData } = action.payload;

      // Check if the movie state exists, if not, initialize it
      if (!state.movieStates[movieId]) {
        state.movieStates[movieId] = {
          onMyList: false,
          isWatched: false,
        };
      }

      state.movieStates[movieId].onMyList = true;
      state.myList.push(movieData);
      // state.AddToMyList = true;
    },
    setSubFromMyList: (state, action) => {
      const { movieId } = action.payload;
      state.movieStates[movieId].addToMyList = false;
      // state.AddToMyList = false;
    },
    setIsWatched: (state, action) => {
      const { movieId } = action.payload;
      state.movieStates[movieId].isWatched = true;
      // state.isWatched = true;
    },
    setNotWatched: (state, action) => {
      const { movieId } = action.payload;
      state.movieStates[movieId].isWatched = false;
      // state.isWatched = false;
    },
    addToTheList: (state, action) => {
      const { movieId, movieData } = action.payload;
      state.movieStates[movieId] = {
        addToMyList: true,
        isWatched: false,
      };
      state.myList.push(movieData);
      // state.myList.push(action.payload);
      // console.log(state.myList);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecommendations.fulfilled, (state, action) => {
        state.loading = false;

        // state.movieList = action.payload;
        // Assuming action.payload is an array of movie data
        const updatedMovieList = action.payload.map((movieData) => {
          // Check if the movie state exists, if not, initialize it
          if (!state.movieStates[movieData.id]) {
            state.movieStates[movieData.id] = {
              onMyList: false,
              isWatched: false,
            };
          }
          // Add onMyList and isWatched fields to the movie data
          return {
            ...movieData,
            onMyList: state.movieStates[movieData.id].onMyList,
            isWatched: state.movieStates[movieData.id].isWatched,
          };
        });

        state.movieList = updatedMovieList;

        console.log(state.movieList);
      })
      .addCase(getRecommendations.rejected, (state, action) => {
        state.loading = false;
        // Handle the error, you can add an error field to the state
      });
  },
});
export const {
  setSubFromMyList,
  setAddToMyList,
  setIsWatched,
  setNotWatched,
  addToTheList,
  initializeMovieState,
  deleteMovieDetailIfNotOnMyList,
} = movieSlice.actions;
export default movieSlice.reducer;
