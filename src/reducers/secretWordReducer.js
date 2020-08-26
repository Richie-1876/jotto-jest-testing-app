import { actionTypes } from "../actions";

/***************************************************************************
 *@function - secretWordReducer
 *@param - {object} state - state before reducer
 *@param - {object} action - action sent to reducer
 *@returns - {string} - New State (secret word payload from action)
 *****************************************************************************/

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
