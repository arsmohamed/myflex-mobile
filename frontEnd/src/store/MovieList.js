import { createSlice } from "@reduxjs/toolkit";
import HR1 from "../Assets/HR.jpeg";
import HR2 from "../Assets/HP2.jpeg";
import HR3 from "../Assets/HP3.jpeg";
import HR4 from "../Assets/HP1.jpeg";
import HR5 from "../Assets/HP5.jpeg";
import IMBD from "../Assets/IMBD.png";

const initialState = {
  movieList: [
    {
      id: "1",
      img: HR1,
      imbd: IMBD,
      rating: "9.8/10",
      Title: "Harry Potter 1",
    },
    {
      id: "2",
      img: HR2,
      imbd: IMBD,
      rating: "9.8/10",
      Title: "Harry Potter 2",
    },
    {
      id: "3",
      img: HR3,
      imbd: IMBD,
      rating: "9.8/10",
      Title: "Harry Potter 3",
    },
    {
      id: "4",
      img: HR4,
      imbd: IMBD,
      rating: "9.8/10",
      Title: "Harry Potter 4",
    },
    {
      id: "5",
      img: HR5,
      imbd: IMBD,
      rating: "9.8/10",
      Title: "Harry Potter 5",
    },
    {
      id: "6",
      img: HR4,
      imbd: IMBD,
      rating: "9.8/10",
      Title: "Harry Potter 6",
    },
    {
      id: "7",
      img: HR5,
      imbd: IMBD,
      rating: "9.8/10",
      Title: "Harry Potter 7",
    },
    {
      id: "8",
      img: HR4,
      imbd: IMBD,
      rating: "9.8/10",
      Title: "Harry Potter 8",
    },
    {
      id: "9",
      img: HR5,
      imbd: IMBD,
      rating: "9.8/10",
      Title: "Harry Potter 9",
    },
    {
      id: "10",
      img: HR4,
      imbd: IMBD,
      rating: "9.8/10",
      Title: "Harry Potter 10",
    },
    {
      id: "11",
      img: HR5,
      imbd: IMBD,
      rating: "9.8/10",
      Title: "Harry Potter 11",
    },
    {
      id: "12",
      img: HR5,
      imbd: IMBD,
      rating: "9.8/10",
      Title: "Harry Potter 12",
    },
  ],
  loading: false,
  currentPage: 1,
};

const movieSlice = createSlice({
  name: "MovieList",
  initialState: initialState,
  reducers: {
    addMovieCards(state, action) {
      state.movieList.push(action.payload);
    },
    setMovieList: (state, action) => {
      state.movieList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});
export const { addMovie, setMovieList, setLoading, setCurrentPage } = movieSlice.actions;
export default movieSlice.reducer;
