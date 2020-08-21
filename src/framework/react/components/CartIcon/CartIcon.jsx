import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBagIcon } from 'assets/shopping-bag.svg';
import { actions } from 'framework/redux';
import './CartIcon.styles.scss';

const countCartItems = cartItems => cartItems.ids.reduce(
  (count, id) => count + cartItems[id].quantity,
  0
);

const CartIcon = ({ cartItems, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{countCartItems(cartItems)}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems }}) => ({
  cartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(actions.toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
