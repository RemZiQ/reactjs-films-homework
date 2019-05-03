import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';


import './movieLIstHeader.scss';

const MovieListHeader = ({
  getTrandingFilms,
  getTopRated,
  getComingSoonFilms,
  getByGenre,
  genres,
}) => {
  const handleForFetchByGenre = (e) => {
    getByGenre(e.target.id);
  };
  const listOfButtonsByGenres = genres.map(item => (
    <Link to={{ pathname: '/search', search: `?query=${item.name}` }}>
      <li onClick={handleForFetchByGenre} id={item.id}>{item.name}</li>
    </Link>
  ));
  return (
    <nav className="movieListNav">
      <ul>
        <li>
          <Link to={{ pathname: '/search', search: '?query=Trending' }}>
            <button onClick={getTrandingFilms} type="submit">Trending</button>
          </Link>
        </li>
        <li>
          <Link to={{ pathname: '/search', search: '?query=Top Rated' }}>
            <button onClick={getTopRated} type="submit">Top Rated</button>
          </Link>
        </li>
        <li>
          <Link to={{ pathname: '/search', search: '?query=Coming soon' }}>
            <button onClick={getComingSoonFilms} type="submit">Coming soon</button>
          </Link>
        </li>
        <li className="dropDown">
          <button type="submit">Genre</button>
          <ul className="dropDownGenres">
            {listOfButtonsByGenres}
          </ul>
        </li>
      </ul>
    </nav>
  );
};


MovieListHeader.propTypes = {
  getTrandingFilms: propTypes.func.isRequired,
  getTopRated: propTypes.func.isRequired,
  getComingSoonFilms: propTypes.func.isRequired,
  getByGenre: propTypes.func.isRequired,
  genres: propTypes.arrayOf(propTypes.object),
};

MovieListHeader.defaultProps = {
  genres: [{ id: 28, name: 'Action' }],
};

// MovieListHeader.defaultProps = {
//   fetchTrandingData: null,
//   fetchTopRatedData: null,
//   fetchComingSoonData: null,
// };

export default MovieListHeader;
