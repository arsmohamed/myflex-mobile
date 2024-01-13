// navigationActions.js
export const changeScreen = (screenName) => ({
  type: "CHANGE_SCREEN",
  payload: {
    screenName,
  },
});
