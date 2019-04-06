import React, { Component } from 'react';

import './buttonsHover.scss';

const ButtonHover = ({
  id, handleOpenOverview, fetchTrailer, handleShowTrailer, state,
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

export default ButtonHover;
