import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from 'pages';
import './App.css';

function HatsPage() {
  return <h1>HATS PAGE</h1>
}

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}
