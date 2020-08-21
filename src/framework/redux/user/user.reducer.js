import { SET_CURRENT_USER } from './user.types';

const INITAL_STATE = {
  currentUser: null
};

export default function userReducer(state = INITAL_STATE, { payload, type }) {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
