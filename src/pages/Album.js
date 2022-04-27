import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      albumName: '',
      artName: '',
      albumCover: '',
      trackList: [],
      loadScreen: false,
    };
  }

  componentDidMount = async () => {
    // console.log(this.props);
    const { match: { params: { id } } } = this.props;
    const songsList = await getMusics(id);
    // console.log(songsList);
    this.setState({
      albumName: songsList[0].collectionName,
      artName: songsList[0].artistName,
      albumCover: songsList[0].artworkUrl100,
    });
    const tracks = songsList.filter((song) => song.kind === 'song');
    this.setState({
      trackList: tracks,
    });
  }

  render() {
    const { artName, albumName, albumCover, trackList, loadScreen } = this.state;
    if (loadScreen) {
      return (<Loading />);
    }
    return (
      <div data-testid="page-album">
        <Header />
        <h2 data-testid="artist-name">{artName}</h2>
        <h4 data-testid="album-name">{albumName}</h4>
        <img src={ albumCover } alt={ albumName } />
        <ul>
          {trackList.map((track) => (
            <MusicCard
              key={ track.trackId }
              trackName={ track.trackName }
              previewUrl={ track.previewUrl }
              trackId={ track.trackId }
              musicObj={ track }
            />
          ))}
        </ul>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
