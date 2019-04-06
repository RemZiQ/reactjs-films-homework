import React from 'react';

import MainInfo from '../MainInfo';
import './overview.scss';


const Overview = ({
  id, overview, title, mark, genres, handleClose, handleForFetchTrailer, handleForOpenModal, state,
}) => {
  const handleForTrailer = (e) => {
    handleClose();
    handleForFetchTrailer(e);
    handleForOpenModal();
  };
  return (
    <div className="movieList__item__overview" id={`overview${id}`}>
      <button onClick={handleClose} type="submit" className="movieList__item__closeOverview" id={`closeOverview${id}`}>
        <i className="fas fa-times" />
      </button>
      <MainInfo title={title} mark={mark} genres={genres} />
      <div className="movieList__item__overviewDetails">{overview}</div>
      <button onClick={handleForTrailer} type="button" className="action__watch overview__watch" id={id}>Watch now</button>
    </div>
  );
};

export default Overview;
