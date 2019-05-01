import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';


import './buttonsHover.scss';

const ButtonHover = ({
  id,
  handleOpenOverview,
  fetchTrailer,
  handleShowTrailer,
  location,
  fetchMovie,
}) => {
  const handle = (e) => {
    handleShowTrailer();
    try {
      fetchTrailer(e);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenOverviewAndFetchCurrentMovie = (e) => {
    handleOpenOverview();
    fetchMovie(e.target.id);
  };

  const param = new URLSearchParams(location.search);
  const query = param.get('query');
  const currentQuery = query === null ? 'init793797112020979' : query;

  return (
    <div className="movieList__item_buttons_container" id={`${id}`}>
      <div className="movieList__item__button_watch_container">
        <button
          onClick={handle}
          type="button"
          className="movieList__item__button_watch"
          id={id}
        />
        <p>Watch now</p>
      </div>
      <Link to={{ pathname: '/search', search: `?query=${currentQuery}&id=${id}` }}>
        <button
          onClick={handleOpenOverviewAndFetchCurrentMovie}
          type="button"
          className="movieList__item__button_view"
          id={`${id}`}
        >
        View info
        </button>
      </Link>
    </div>
  );
};

ButtonHover.propTypes = {
  id: propTypes.number,
  handleOpenOverview: propTypes.func,
  fetchTrailer: propTypes.func,
  handleShowTrailer: propTypes.func,
  location: propTypes.objectOf(propTypes.any),
  fetchMovie: propTypes.func,
};

ButtonHover.defaultProps = {
  id: null,
  handleOpenOverview: null,
  fetchTrailer: null,
  handleShowTrailer: null,
  location: null,
  fetchMovie: null,
};

export default ButtonHover;
