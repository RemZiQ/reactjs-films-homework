import React from 'react';
import MovieDetailsPageNav from '../MovieDetailsPage__Nav/index';
import MovieDetailsPageFooter from '../MovieDetailsPage__Footer/index';
import './style.scss';


const  MovieDetailsPage = () => {
    return (
      <header className="pageHeader" id="pageHeaderID">
      <MovieDetailsPageNav></MovieDetailsPageNav>
      <MovieDetailsPageFooter></MovieDetailsPageFooter>
      </header>
    )
}

export default MovieDetailsPage;