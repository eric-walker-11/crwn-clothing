export function addCartItem(cartItems, item) {
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
};

export function removeCartItem(cartItems, cartItem) {
  const { item } = cartItem;

  if (!cartItems[item.id]) {
    return cartItems;
  }

  const updatedCartItems = {
    ...cartItems,
    ids: cartItems.ids.filter(id => id !== item.id)
  };
  delete updatedCartItems[item.id];
  return updatedCartItems;
};
