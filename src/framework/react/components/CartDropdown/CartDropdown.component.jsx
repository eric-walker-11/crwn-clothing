import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CartItem, CustomButton } from 'framework/react/components';
import { selectors } from 'framework/redux';

import './CartCropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.ids.map(id => (
        <CartItem key={id} cartItem={cartItems[id]} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectors.selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
