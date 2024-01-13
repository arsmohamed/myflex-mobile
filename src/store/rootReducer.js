// rootReducer.js
import { combineReducers } from "redux";
import navigationReducer from "./reducers/navigationReducer";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  // Add other reducers here if you have more
});

export default rootReducer;
