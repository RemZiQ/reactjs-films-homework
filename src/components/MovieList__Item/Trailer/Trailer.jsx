import React from 'react';
import { connect } from 'react-redux'

import './trailer.scss';

const Trailer = ({ handle, trailer}) => {
  return (
    <div className="movieList__item__trailer">
      <button onClick={handle} className="movieList__item__trailer_closeButton">
        <i className="fas fa-times" />
      </button>
      <iframe style={{ backgroundColor: '#000' }} name="trailer" width="640" height="480" frameBorder="0" allowFullScreen src={trailer} />
    </div>
  );
};

const mapStateToProps = state => ({ trailer: state.currentTrailer });

export default connect(mapStateToProps)(Trailer);
