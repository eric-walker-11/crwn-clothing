import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBagIcon } from 'assets/shopping-bag.svg';
import { actions, selectors } from 'framework/redux';
import './CartIcon.styles.scss';

const CartIcon = ({ count, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{count}</span>
  </div>
);

const mapStateToProps = state => ({
  count: selectors.selectCartItemCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(actions.toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
