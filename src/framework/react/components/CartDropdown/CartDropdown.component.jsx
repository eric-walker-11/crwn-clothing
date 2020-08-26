import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { CartItem, CustomButton } from 'framework/react/components';
import { selectors } from 'framework/redux';

import './CartCropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length
          ? cartItems.ids.map(id => (
            <CartItem key={id} cartItem={cartItems[id]} />
          ))
          : <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectors.selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
