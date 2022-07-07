import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <Link to="/shopping-cart" data-testid="shopping-cart-button">
        Carrinho de compras
      </Link>
    );
  }
}

export default ShoppingCartButton;