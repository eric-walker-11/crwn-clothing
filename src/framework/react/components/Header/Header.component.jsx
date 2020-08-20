import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartIcon } from 'framework/react/components';
import { authService } from 'service';
import { ReactComponent as Logo } from 'assets/crown.svg';
import './Header.styles.scss';

function Header({ currentUser }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {
          currentUser
            ? (
              <div className="option" onClick={() => authService.signOut()}>
                SIGN OUT
              </div>
            )
            : (<Link className="option" to="/signIn">SIGN IN</Link>)
        }
        <CartIcon />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
