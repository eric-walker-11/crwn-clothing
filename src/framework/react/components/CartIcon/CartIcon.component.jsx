import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingBagIcon } from 'assets/shopping-bag.svg';
import { actions, selectors } from 'framework/redux';

import './CartIcon.styles.scss';

const CartIconComponent = ({ count, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{count}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  count: selectors.selectCartItemCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(actions.toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIconComponent);
