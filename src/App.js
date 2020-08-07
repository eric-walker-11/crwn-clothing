import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from 'components';
import { HomePage, ShopPage, SignInPage } from 'pages';
import './App.css';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signIn' component={SignInPage} />
      </Switch>
    </div>
  );
}
