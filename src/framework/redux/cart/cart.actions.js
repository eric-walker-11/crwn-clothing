import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  TOGGLE_CART_HIDDEN
} from './cart.types';

export const addCartItem = item => ({
  payload: item,
  type: ADD_CART_ITEM
});

export const removeCartItem = cartItem => ({
  payload: cartItem,
  type: REMOVE_CART_ITEM
});

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});
