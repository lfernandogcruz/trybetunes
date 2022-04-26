import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loadScreen: false,
      favList: [],
      checked: false,
    };
    // this.favCheck = this.favCheck.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { checked } = target;
    const { musicObj } = this.props;
    //   // const update = target.checked;
    //   this.setState({
    //     favList: [{ [name]: checked }],
    //   }, this.favCheck);
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

  // favCheck() {
  //   const { musicObj } = this.props;
  //   this.setState({
  //     loadScreen: true,
  //   }, async () => {
  //     const addFav = await addSong(musicObj);
  //   });
  //   this.setState({ loadScreen: false });
  // }

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
  // onInputChange: PropTypes.func.isRequired,
  musicObj: PropTypes.shape({}).isRequired,
};
