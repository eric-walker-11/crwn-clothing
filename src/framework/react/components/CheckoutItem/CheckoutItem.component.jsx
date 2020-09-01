import React from 'react';
import { connect } from 'react-redux';

import { actions } from 'framework/redux';

import './CheckoutItem.styles.scss';

const CheckoutItem = ({ cartItem, removeCartItem }) => {
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
      <div className="remove-button" onClick={() => removeCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeCartItem: cartItem => dispatch(actions.removeCartItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
