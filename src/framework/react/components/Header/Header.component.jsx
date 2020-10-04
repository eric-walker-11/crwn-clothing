import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CartDropdown, CartIcon } from 'framework/react/components';
import { selectors } from 'framework/redux';
import { authService } from 'service';
import { ReactComponent as Logo } from 'assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  Option,
  OptionsContainer
} from './Header.styles'

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <Option to="/shop">SHOP</Option>
        <Option to="/contact">CONTACT</Option>
        {
          currentUser
            ? (
              <Option as="div" onClick={() => authService.signOut()}>
                SIGN OUT
              </Option>
            )
            : (<Option to="/signIn">SIGN IN</Option>)
        }
        <CartIcon />
      </OptionsContainer>
      { !hidden && <CartDropdown /> }
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectors.selectCurrentUser,
  hidden: selectors.selectCartHidden
});

export default connect(mapStateToProps)(Header);
