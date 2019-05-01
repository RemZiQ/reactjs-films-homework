import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';


import './movieLIstHeader.scss';

const MovieListHeader = ({
  fetchTrandingData,
  fetchTopRatedData,
  fetchComingSoonData,
  fetchByGenre,
}) => {
  const handleForFetchByGenre = e => fetchByGenre(e.target.id);
  return (
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
            {/* <ul>
              <li>button</li>
            </ul> */}
            <button onClick={handleForFetchByGenre} type="submit" id={28}>Genre</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};


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

export default MovieListHeader;
