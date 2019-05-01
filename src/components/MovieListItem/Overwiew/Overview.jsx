import React from 'react';
import propTypes from 'prop-types';

import MainInfo from '../MainInfo';
import './overview.scss';


export const Overview = ({
  id,
  overview,
  title,
  mark,
  genres,
  handleClose,
  handleForFetchTrailer,
  handleForOpenModal,
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


Overview.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
  mark: propTypes.number,
  genres: propTypes.arrayOf(propTypes.number),
  overview: propTypes.string,
  handleClose: propTypes.func,
  handleForFetchTrailer: propTypes,
  handleForOpenModal: propTypes,
};

Overview.defaultProps = {
  title: 'Sorry here is no title',
  mark: 1,
  overview: 'Sorry here is no info',
  id: null,
  genres: [],
  handleClose: () => {},
  handleForFetchTrailer: () => {},
  handleForOpenModal: () => {},
};

export default Overview;
