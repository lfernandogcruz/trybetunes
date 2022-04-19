import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">Profile</div>
    );
  }
}

// a rota /profile deve renderizar um componente chamado Profile.
// Este componente deve ter uma div que envolva todo seu conteúdo e
// ter o atributo data-testid="page-profile"
