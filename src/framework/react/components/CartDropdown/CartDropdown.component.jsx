import React from 'react';
import { connect } from 'react-redux';
import { CartItem, CustomButton } from 'framework/react/components';
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

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
