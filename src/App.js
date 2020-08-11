import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from 'api/firebase';
import { Header } from 'components';
import { HomePage, ShopPage, SignInPage } from 'pages';
import { userProfileDataAccess } from 'service/dataAccess';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = () => {};

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      await userProfileDataAccess.createUserProfile(user);
      await this.setState({ currentUser: user });
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
