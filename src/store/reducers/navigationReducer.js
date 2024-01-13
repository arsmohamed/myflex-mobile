// navigationReducer.js
const initialState = {
  currentScreen: "Marketplace", // Default screen
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SCREEN":
      return {
        ...state,
        currentScreen: action.payload.screenName,
      };
    default:
      return state;
  }
};

export default navigationReducer;
