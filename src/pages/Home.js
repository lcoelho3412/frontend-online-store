import React from 'react';
import SearchInput from '../components/SearchInput';
import ShoppingCartButton from '../components/ShoppingCartButton';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchInput />
        <ShoppingCartButton />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;