import React, { Component } from 'react';
import Header from '../components/Header';

export default class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        Favorites
      </div>
    );
  }
}

// a rota /favorites deve renderizar um componente chamado Favorites.
// Este componente deve ter uma div que envolva todo seu conteúdo e ter o
// atributo data-testid="page-favorites"
