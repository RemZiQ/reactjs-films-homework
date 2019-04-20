import React from 'react';
import { connect } from 'react-redux';

import './movieLIstHeader.scss';

const MovieListHeader = () => {
  return (
    <nav>
      <ul>
        <li>Trending</li>
        <li>Top Rated</li>
        <li>Comming soon</li>
        <li>Genre</li>
      </ul>
    </nav>
  );
};

export default MovieListHeader;
