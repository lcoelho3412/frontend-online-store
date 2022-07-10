import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Details from './pages/Details';

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={ Home } />
        <Route
          path="/details/:id"
          render={ (props) => <Details { ...props } /> }
        />
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
      </>
    );
  }
}

export default Routes;
