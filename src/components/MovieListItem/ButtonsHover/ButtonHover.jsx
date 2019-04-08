import React from 'react';
import propTypes from 'prop-types';

import './buttonsHover.scss';

const ButtonHover = ({
  id, handleOpenOverview, fetchTrailer, handleShowTrailer,
}) => {
  const handle = (e) => {
    handleShowTrailer();
    fetchTrailer(e);
  };
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
      <button onClick={handleOpenOverview} type="button" className="movieList__item__button_view">View info</button>
    </div>
  );
};

ButtonHover.propTypes = {
  id: propTypes.number.isRequired,
  handleOpenOverview: propTypes.func.isRequired,
  fetchTrailer: propTypes.func.isRequired,
  handleShowTrailer: propTypes.func.isRequired,
};

export default ButtonHover;
