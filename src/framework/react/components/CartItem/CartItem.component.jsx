import React from 'react';
import './CartItem.styles.scss';

export default ({
  cartItem: {
    item: { imageUrl, name, price },
    quantity
  }
}) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{quantity} x ${price}</span>
    </div>
  </div>
);
