import React, { Component } from 'react';

export default class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">Album</div>
    );
  }
}

// a rota /album/:id deve renderizar um componente chamado Album.
// Este componente deve ter uma div que envolva todo seu conteúdo e
// ter o atributo data-testid="page-album"
