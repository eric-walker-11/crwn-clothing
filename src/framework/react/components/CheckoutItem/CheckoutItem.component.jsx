import React from 'react';
import { connect } from 'react-redux';

import { actions } from 'framework/redux';

import './CheckoutItem.styles.scss';

const CheckoutItem = ({
  addCartItem,
  cartItem,
  clearCartItem,
  removeCartItem
}) => {
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
        <div className="arrow" onClick={() => removeCartItem(cartItem.item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem.item)}>
          &#10095;
        </div>
      </span>

      <span className="price">${price}</span>

      <div
        className="remove-button"
        onClick={() => clearCartItem(cartItem.item)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(actions.addCartItem(item)),
  clearCartItem: item => dispatch(actions.clearCartItem(item)),
  removeCartItem: item => dispatch(actions.removeCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
