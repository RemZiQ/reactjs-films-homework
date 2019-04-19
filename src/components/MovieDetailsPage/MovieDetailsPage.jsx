import React from 'react';
import MovieDetailsPageNav from '../MovieDetailsPageNav';
import MovieDetailsPageFooter from '../MovieDetailsPageFooter';
import './movieDetailsPage.scss';


const MovieDetailsPage = ({ query }) => {
  console.log('query________', query);
  return (
    <header className="pageHeader" id="pageHeaderID">
      <MovieDetailsPageNav query={query} />
      <MovieDetailsPageFooter />
    </header>
  );
};

export default MovieDetailsPage;
