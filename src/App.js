import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import ShopPage from './pages/shop/shop'
import HomePage from './pages/homepage/homepage'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>

  );
}

export default App;
