// rootReducer.js
import { combineReducers } from "redux";
import Reducer from "./reducers/Reducer";

const rootReducer = combineReducers({
  navigation: Reducer,
  // Add other reducers here if you have more
});

export default rootReducer;
