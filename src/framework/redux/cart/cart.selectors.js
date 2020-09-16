import { createSelector } from 'reselect';

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartEmpty = createSelector(
  [selectCartItems],
  cartItems => !cartItems.ids.length
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.ids.reduce(
    (count, id) => count + cartItems[id].quantity,
    0
  )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.ids.reduce(
    (total, id) => {
      const cartItem = cartItems[id];
      return total + (cartItem.item.price * cartItem.quantity);
    },
    0
  )
)
