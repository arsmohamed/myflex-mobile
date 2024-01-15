// navigationActions.js
export const changeScreen = (screenName) => ({
  type: "CHANGE_SCREEN",
  payload: {
    screenName,
  },
});

export const selectOption = (option) => ({
  type: "SELECT_OPTION",
  payload: option,
});
