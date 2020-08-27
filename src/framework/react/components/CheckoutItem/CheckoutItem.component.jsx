import React from 'react';

import './CheckoutItem.styles.scss';

export default ({ cartItem }) => {
  const {
    item: { imageUrl, name, price },
    quantity
  } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};
