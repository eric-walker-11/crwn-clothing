import { addCartItem, clearCartItem, removeCartItem } from './cart.helpers';
import {
  ADD_CART_ITEM,
  CLEAR_CART_ITEM, REMOVE_CART_ITEM,
  TOGGLE_CART_HIDDEN
} from './cart.types';

const INITIAL_STATE = {
  cartItems: { ids: [] },
  hidden: true
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload)
      };

    case CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: clearCartItem(state.cartItems, action.payload)
      };

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload)
      }

    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    default:
      return state;
  }
};
