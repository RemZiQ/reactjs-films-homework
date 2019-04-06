import React from 'react';
import { connect } from 'react-redux'

import './trailer.scss';

const Trailer = ({ handle, trailer}) => {
  return (
    <div className="movieList__item__trailer">
      <button onClick={handle} className="movieList__item__trailer_closeButton">close</button>
      <iframe style={{ backgroundColor: '#F6BB42' }} name="trailer" width="1080" height="760" frameBorder="0" allowFullScreen src={trailer} />
    </div>
  );
};

const mapStateToProps = state => ({ trailer: state.currentTrailer });

export default connect(mapStateToProps)(Trailer);
