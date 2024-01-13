// actions.js
import { CHANGE_SCREEN, SELECT_OPTION } from './actionTypes';

export const changeScreen = (screenName) => ({
  type: CHANGE_SCREEN,
  payload: {
    screenName,
  },
});

export const selectOption = (option) => ({
  type: SELECT_OPTION,
  payload: option,
});
