import {
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  TOGGLE_CART_HIDDEN
} from './cart.types';

export const addCartItem = item => ({
  payload: item,
  type: ADD_CART_ITEM
});

export const clearCartItem = cartItem => ({
  payload: cartItem,
  type: CLEAR_CART_ITEM
});

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});
