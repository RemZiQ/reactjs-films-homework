import React from 'react';
import propTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCurrentMovie } from '../../../modules/module_Search/actions';
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
      <Link to={{ pathname: '/search', search: `?query=${query}&id=${id}` }}>
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
  id: propTypes.number.isRequired,
  handleOpenOverview: propTypes.func.isRequired,
  fetchTrailer: propTypes.func.isRequired,
  handleShowTrailer: propTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchMovie: (ID) => {
    dispatch(getCurrentMovie(ID));
  },
});

export default withRouter(connect(null, mapDispatchToProps)(ButtonHover));
