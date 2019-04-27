import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import { getTrandingFilms, getTopRated, getComingSoonFilms } from '../../../modules/module_Search/actions';
import './movieLIstHeader.scss';

export const MovieListHeader = ({
  fetchTrandingData,
  fetchTopRatedData,
  fetchComingSoonData,
}) => (
  <nav className="movieListNav">
    <ul>
      <li>
        <Link to={{ pathname: '/search', search: '?query=Trending' }}>
          <button onClick={fetchTrandingData} type="submit">Trending</button>
        </Link>
      </li>
      <li>
        <Link to={{ pathname: '/search', search: '?query=Top Rated' }}>
          <button onClick={fetchTopRatedData} type="submit">Top Rated</button>
        </Link>
      </li>
      <li>
        <Link to={{ pathname: '/search', search: '?query=Coming soon' }}>
          <button onClick={fetchComingSoonData} type="submit">Coming soon</button>
        </Link>
      </li>
      <li>
        <Link to={{ pathname: '/search', search: '?query=Genre' }}>
          <button type="submit">Genre</button>
        </Link>
      </li>
    </ul>
  </nav>
);


const mapDispatchToProps = dispatch => ({
  fetchTrandingData: () => {
    dispatch(getTrandingFilms());
  },
  fetchTopRatedData: () => {
    dispatch(getTopRated());
  },
  fetchComingSoonData: () => {
    dispatch(getComingSoonFilms());
  },
});


MovieListHeader.propTypes = {
  fetchTrandingData: propTypes.func,
  fetchTopRatedData: propTypes.func,
  fetchComingSoonData: propTypes.func,
};

MovieListHeader.defaultProps = {
  fetchTrandingData: null,
  fetchTopRatedData: null,
  fetchComingSoonData: null,
};


export default connect(null, mapDispatchToProps)(MovieListHeader);
