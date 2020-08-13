import { ACTIONS } from 'const';

const { SET_CURRENT_USER } = ACTIONS;

const INITAL_STATE = {
  currentUser: null
};

export default function userReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
