import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <li>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
      </li>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};
