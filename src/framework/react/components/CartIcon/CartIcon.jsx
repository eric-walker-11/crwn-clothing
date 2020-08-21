import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBagIcon } from 'assets/shopping-bag.svg';
import { actions } from 'framework/redux';
import './CartIcon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(actions.toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
