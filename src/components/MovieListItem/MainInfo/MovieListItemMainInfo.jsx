import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import './mainInfo.scss';


const MainInfo = ({
  title, mark, genres, storeGenres,
}) => {
  const mapGenres = storeGenres;
  let listOfGenres = '';
  if (storeGenres.length) {
    listOfGenres = genres.map(item => (
      <li key={item}>{mapGenres.filter(elem => elem.id === item)[0].name}</li>
    ));
  }
  return (
    <div className="movieList__item__overview__mainInfo">
      <h2 className="movieList__item_title">{title}</h2>
      <div className="movieList__item_mark">{mark}</div>
      <ul className="movieList__item_genresList">{listOfGenres}</ul>
    </div>
  );
};


MainInfo.propTypes = {
  title: propTypes.string,
  mark: propTypes.number,
  genres: propTypes.arrayOf(propTypes.number).isRequired,
  storeGenres: propTypes.arrayOf(propTypes.object).isRequired,
};

MainInfo.defaultProps = {
  title: 'Sorry, no title here',
  mark: 'Sorry, no mark here',
};


const mapStateToProps = store => ({ storeGenres: store.genres });

export default connect(
  mapStateToProps, null,
)(MainInfo);
