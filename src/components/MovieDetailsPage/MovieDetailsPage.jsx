import React from 'react';
import MovieDetailsPageNav from '../MovieDetailsPageNav';
import MovieDetailsPageFooter from '../MovieDetailsPageFooter';
import './movieDetailsPage.scss';


const MovieDetailsPage = () => (
  <header className="pageHeader" id="pageHeaderID">
    <MovieDetailsPageNav />
    <MovieDetailsPageFooter />
  </header>
);

export default MovieDetailsPage;
