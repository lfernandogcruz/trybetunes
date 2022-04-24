import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AlbumThumb from '../components/AlbumThumb';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      btnOnOff: true,
      inputSearch: '',
      loadScreen: false,
      albuns: [],
      target: '',
    };
    this.verifyInput = this.verifyInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { inputSearch } = this.state;
    const toBeSearched = inputSearch;
    // seekArtist = async () => {
    this.setState(() => ({
      inputSearch: '',
      loadScreen: true,
    }), async () => {
      const newAlbum = await searchAlbumsAPI(toBeSearched);
      // console.log('new album', newAlbum);
      // console.log('search album', toBeSearched);

      this.setState({
        loadScreen: false,
        albuns: newAlbum,
        target: toBeSearched,
      });
      // console.log('albuns', newAlbum);
    });
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
    const { btnOnOff, inputSearch, loadScreen, albuns, target } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        {
          loadScreen
            ? <Loading />
            : (
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
                  type="button"
                  data-testid="search-artist-button"
                  disabled={ btnOnOff }
                  onClick={ this.handleClick }
                >
                  Pesquisar
                </button>
              </form>
            )
        }
        {
          albuns.length > 0 && (
            <p>{`Resultado de álbuns de: ${target}`}</p>
          )
        }
        {
          (albuns.length === 0) ? (
            <span>Nenhum álbum foi encontrado</span>
          ) : (
            albuns.map((dsc) => (
              <div key={ dsc.collectionId }>
                <Link
                  data-testid={ `link-to-album-${dsc.collectionId}` }
                  to={ `/album/${dsc.collectionId}` }
                >
                  Info
                </Link>
                <AlbumThumb
                  imgSrc={ dsc.artworkUrl100 }
                  artName={ dsc.artistName }
                  albName={ dsc.collectionName }
                />
              </div>
            ))
          )
        }
      </div>
    );
  }
}
// a rota /search deve renderizar um componente chamado Search.
// Este componente deve ter uma div que envolva todo seu conteúdo e ter
// o atribucto data-testid="page-search"
