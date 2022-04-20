import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        Search
      </div>
    );
  }
}
// a rota /search deve renderizar um componente chamado Search.
// Este componente deve ter uma div que envolva todo seu conteúdo e ter
// o atribucto data-testid="page-search"
