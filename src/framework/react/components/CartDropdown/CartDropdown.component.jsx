import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { CartItem, CustomButton } from 'framework/react/components';
import { actions, selectors } from 'framework/redux';

import './CartCropdown.styles.scss';

const { toggleCartHidden } = actions;
const { selectCartEmpty, selectCartItems } = selectors;

const CartDropdown = ({ cartItems, dispatch, history, isEmpty }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        isEmpty
          ? <span className="empty-message">Your cart is empty</span>
          : cartItems.ids.map(id => (
            <CartItem key={id} cartItem={cartItems[id]} />
          ))
      }
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  isEmpty: selectCartEmpty
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
