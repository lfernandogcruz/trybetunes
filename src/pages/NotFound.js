import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div data-testid="page-not-found">NotFound</div>
    );
  }
}

// para qualquer outra rota não mapeada, deve ser renderizado um componente
// chamado NotFound.
// Este componente deve ter uma div que envolva todo seu conteúdo e ter o
// atributo data-testid="page-not-found"
