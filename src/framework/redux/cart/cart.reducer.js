import { ADD_CART_ITEM, TOGGLE_CART_HIDDEN } from './cart.types';

const INITIAL_STATE = {
  cartItems: { ids: [] },
  hidden: true
};

function addCartItem(cartItems, item) {
  const existingItem = cartItems[item.id];

  if (existingItem) {
    return {
      ...cartItems,
      [item.id]: {
        ...existingItem,
        quantity: existingItem.quantity + 1
      }
    };
  }

  return {
    ...cartItems,
    ids: [...cartItems.ids, item.id].sort(),
    [item.id]: { item, quantity: 1 }
  };
}

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload)
      };

    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    default:
      return state;
  }
};
