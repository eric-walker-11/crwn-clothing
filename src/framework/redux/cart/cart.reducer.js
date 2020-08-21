import { ADD_CART_ITEM, TOGGLE_CART_HIDDEN } from './cart.types';

const INITIAL_STATE = {
  cartItems: [],
  hidden: true
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {...state, cartItems: [...state.cartItems, action.payload]};
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};
