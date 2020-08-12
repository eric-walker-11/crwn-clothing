import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from 'api/firebase';
import { Header } from 'components';
import { HomePage, ShopPage, SignInPage } from 'pages';
import { userDataAccess } from 'service/dataAccess';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = () => {};

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await userDataAccess.createUser(userAuth);

        userRef.onSnapshot(
          userSnapshot => this.setState(
            {
              currentUser: { id: userSnapshot.id, ...userSnapshot.data() }
            },
            () => console.debug('Setting signed in user', this.state.currentUser)
          )
        );
      } else {
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
