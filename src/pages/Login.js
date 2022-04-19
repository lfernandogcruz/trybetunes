import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div data-testid="page-login">
        <form>
          Login
        </form>
      </div>
    );
  }
}

// a rota / deve renderizar um componente chamado Login.
// Este componente deve ter uma div com o atributo data-testid="page-login" que
// envolva todo seu conteúdo;
