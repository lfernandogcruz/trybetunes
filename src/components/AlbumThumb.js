import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AlbumThumb extends Component {
  render() {
    const { imgSrc, artName, albName } = this.props;
    return (
      <div>
        {/* img */}
        <img
          src={ imgSrc }
          alt={ albName }
        />
        {/* album */}
        <p>{ albName }</p>
        {/* banda */}
        <p>{ artName }</p>
      </div>
    );
  }
}

AlbumThumb.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  artName: PropTypes.string.isRequired,
  albName: PropTypes.string.isRequired,
};
