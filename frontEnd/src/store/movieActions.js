// movieActions.js
import { getRecommendations as getRecommendationsAPI } from "../../services/API"; // Import your API service

import { setMovieList, setLoading } from "../slices/movieSlice";

export const getRecommendations = (page) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await getRecommendationsAPI(page);
    dispatch(setMovieList(response.data));
  } catch (error) {
    console.error("Error fetching recommendations:", error);
  } finally {
    dispatch(setLoading(false));
  }
};
