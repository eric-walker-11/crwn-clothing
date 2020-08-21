import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { userReducer } from './user';

export default combineReducers({
  cart: cartReducer,
  user: userReducer
});
