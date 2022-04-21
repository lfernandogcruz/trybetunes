import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      btnOnOff: true,
      inputSearch: '',
    };
    this.verifyInput = this.verifyInput.bind(this);
  }

  verifyInput({ target }) {
    const { name } = target;
    const update = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: update });

    const { inputSearch } = this.state;
    const minCharacter = 1;
    if (inputSearch.length >= minCharacter) {
      this.setState({
        btnOnOff: false,
      });
    } else {
      this.setState({
        btnOnOff: true,
      });
    }
  }

  render() {
    const { btnOnOff, inputSearch } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        Search
        <form>
          <label htmlFor="inputSearch">
            <input
              data-testid="search-artist-input"
              type="text"
              name="inputSearch"
              id="inputSearch"
              placeholder="digite o nome da banda/artista"
              value={ inputSearch }
              onChange={ this.verifyInput }
            />
          </label>
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ btnOnOff }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}
// a rota /search deve renderizar um componente chamado Search.
// Este componente deve ter uma div que envolva todo seu conteúdo e ter
// o atribucto data-testid="page-search"
