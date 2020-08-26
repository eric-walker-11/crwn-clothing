import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { userDataAccess } from 'dataAccess';
import { Header } from 'framework/react/components';
import {
  CheckoutPage,
  HomePage,
  ShopPage,
  SignInPage
} from 'framework/react/pages';
import { actions, selectors } from 'framework/redux';
import { authService } from 'service';

import './App.scss';

const { setCurrentUser } = actions;
const { selectCurrentUser } = selectors;

class App extends Component {
  unsubscribeFromAuth = () => {};

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = authService.onUserStateChange(async userAuth => {
      if (userAuth) {
        try {
          const user = await userDataAccess.createUser(userAuth);
          console.debug('Setting signed in user', user);
          setCurrentUser(user);
        } catch (error) {
          console.error('Failed to set an authenticated user', error);
        }
      } else {
        console.debug('Clearing current user');
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signIn'
            render={
              () => currentUser
                ? (<Redirect to="/" />)
                : (<SignInPage />)
            }
          />
        </Switch>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
