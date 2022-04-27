import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loadScreen: false,
      favList: [],
      checked: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { checked } = target;
    const { musicObj } = this.props;

    if (checked) {
      this.setState((prevState) => ({
        favList: [...prevState.favList, musicObj],
        loadScreen: true,
        checked,
      }), async () => {
        await addSong(musicObj);
        this.setState({ loadScreen: false });
      });
    }
    this.setState({ checked });
  }

  componentDidMount = async () => {
    const { trackId } = this.props;
    // this.setState({
    //   loadScreen: true,
    // });
    const favs = await getFavoriteSongs();
    const favFilter = favs.filter((fav) => fav.trackId === trackId);
    this.setState({
      // loadScreen: false,
      favList: favFilter,
    });
    const { favList } = this.state;
    favList.forEach((elFav) => {
      if (elFav.trackId === trackId) {
        this.setState({ checked: true });
      }
    });
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { loadScreen, checked } = this.state;
    return (
      <li>
        {
          loadScreen
            ? <Loading /> : (
              <>
                <p>{trackName}</p>
                <audio data-testid="audio-component" src={ previewUrl } controls>
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  {' '}
                  <code>audio</code>
                  .
                </audio>
                <label htmlFor="favorite">
                  <input
                    name="favorite"
                    type="checkbox"
                    data-testid={ `checkbox-music-${trackId}` }
                    checked={ checked }
                    onChange={ this.onInputChange }
                  />
                  Favorita
                </label>
              </>
            )
        }
      </li>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  musicObj: PropTypes.shape({}).isRequired,
};
