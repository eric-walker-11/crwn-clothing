import React from 'react';
import { connect } from 'react-redux';

import { actions } from 'framework/redux';

import './CheckoutItem.styles.scss';

const CheckoutItem = ({ cartItem, clearCartItem }) => {
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
      <span className="quantity">
        <div className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow">&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearCartItem: cartItem => dispatch(actions.clearCartItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
