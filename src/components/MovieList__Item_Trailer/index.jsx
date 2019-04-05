import React from 'react';
import { connect } from 'react-redux';

const Trailer = ({ id, store }) => {
  const hideTrailer = () => {
    const elem = document.getElementById(`trailerContainer${id}`);
    elem.classList.remove('movieList__item__trailerContainerShow');
  };
  return (
    <div className="movieList__item__trailerContainer" id={`trailerContainer${id}`}>
      <button onClick={hideTrailer}>close</button>
      <iframe src={store} name="trailer" width="1080" height="760" frameBorder="0" allowFullScreen className="movieList__item__trailer" />
    </div>
  );
};

const mapStateToProps = state => ({ store: state.currentTrailer });
export default connect(mapStateToProps)(Trailer);
