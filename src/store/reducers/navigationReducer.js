// navigationReducer.js
// const initialState = {
//   currentScreen: "Marketplace", // Default screen
//   selectedOption: null,
// };

// const navigationReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "CHANGE_SCREEN":
//       return {
//         ...state,
//         currentScreen: action.payload.screenName,
//       };
//       case "SELECT_OPTION":
//       return {
//         ...state,
//         selectedOption: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default navigationReducer;

// navigationReducer.js
import { CHANGE_SCREEN, SELECT_OPTION } from '../actions/actionTypes';

const initialState = {
  currentScreen: 'Marketplace',
  selectedOption: null,
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        currentScreen: action.payload.screenName,
      };
    case SELECT_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;
