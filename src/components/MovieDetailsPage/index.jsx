import React from 'react';
import MovieDetailsPageNav from '../MovieDetailsPage__Nav/index';
import MovieDetailsPageFooter from '../MovieDetailsPage__Footer/index';
import './style.scss';


const MovieDetailsPage = ({onSearch}) => (
  <header className="pageHeader" id="pageHeaderID">
    <MovieDetailsPageNav onSearch={onSearch}/>
    <MovieDetailsPageFooter />
  </header>
);

export default MovieDetailsPage;
