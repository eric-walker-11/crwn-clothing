import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { userDataAccess } from 'dataAccess';
import { Header } from 'framework/react/components';
import { actions } from 'framework/redux';
import { HomePage, ShopPage, SignInPage } from 'framework/react/pages';
import { authService } from 'service';
import './App.scss';

const { setCurrentUser } = actions;

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
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signIn' component={SignInPage}/>
        </Switch>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
