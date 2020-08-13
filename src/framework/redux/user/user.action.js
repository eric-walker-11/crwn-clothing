import { ACTIONS } from '../../../const';

const { SET_CURRENT_USER } = ACTIONS;

export function setCurrentUser(user) {
  return {
    payload: user,
    type: SET_CURRENT_USER
  };
}
