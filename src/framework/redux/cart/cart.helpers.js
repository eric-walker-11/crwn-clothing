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

export function clearCartItem(cartItems, item) {
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

export function removeCartItem(cartItems, item) {
  const existingCartItem = cartItems[item.id];
  if (!existingCartItem) {
    return cartItems;
  }

  if (existingCartItem.quantity <= 1) {
    return clearCartItem(cartItems, item);
  }

  return {
    ...cartItems,
    [item.id]: {
      ...existingCartItem,
      quantity: existingCartItem.quantity - 1
    }
  };
};
