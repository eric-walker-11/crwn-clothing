import React from 'react';
import { ReactComponent as ShoppingBagIcon } from 'assets/shopping-bag.svg';
import './CartIcon.styles.scss';

export default function CartIcon() {
  return (
    <div className="cart-icon">
      <ShoppingBagIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
