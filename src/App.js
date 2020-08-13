import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { userDataAccess } from 'dataAccess';
import { Header } from 'react/components';
import { HomePage, ShopPage, SignInPage } from 'react/pages';
import { authService } from 'service';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = () => {};

  componentDidMount() {
    this.unsubscribeFromAuth = authService.onUserStateChange(async userAuth => {
      if (userAuth) {
        try {
          const user = await userDataAccess.createUser(userAuth);
          this.setState(
            { currentUser: user },
            () => console.debug('Setting signed in user', this.state.currentUser)
          );
        } catch (error) {
          console.error('Failed to set an authenticated user', error);
        }
      } else {
        if (this.state.currentUser) {
          console.debug(`Logging out user ${this.state.currentUser.id}`);
        }
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signIn' component={SignInPage}/>
        </Switch>
      </div>
    );
  }
};
