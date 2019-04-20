import React from 'react';
import { connect } from 'react-redux';


import MovieDetailsPageNav from '../MovieDetailsPageNav';
import MovieDetailsPageFooter from '../MovieDetailsPageFooter';
import './movieDetailsPage.scss';


const MovieDetailsPage = ({ currentMovie }) => {
  const urlImage = 'https://image.tmdb.org/t/p/original';
  if (currentMovie) {
    const style = {
      background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 30%),
      linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 30%),
      url(${urlImage}${currentMovie.backdrop_path}) no-repeat black`,
    };
    return (
      <header className="pageHeader" style={style} id="pageHeaderID">
        <MovieDetailsPageNav />
        <MovieDetailsPageFooter />
      </header>
    );
  }
  return <div>loading...</div>;
};

const mapStateToProps = store => ({ currentMovie: store.currentMovie });


export default connect(mapStateToProps, null)(MovieDetailsPage);
