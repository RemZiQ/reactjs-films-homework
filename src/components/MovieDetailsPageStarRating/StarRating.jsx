import React from 'react';
import propTypes from 'prop-types';

import './starRating.scss';


const StarRating = ({
  title, duration, rating, genres,
}) => {
  const handling = (e) => {
    e.preventDefault();
  };
  const countOfStars = Math.round(rating);
  const listGenres = genres
    .map((item, index) => <li key={index}><button type="submit" onClick={handling}>{item}</button></li>);
  const stars = new Array(countOfStars).fill(1).map((item, index) => <li key={index}><i className="fas fa-star" /></li>);
  return (
    <div className="starRating_container">
      <h1>{title}</h1>
      <div className="starRating__genres_container">
        <div className="starRating__genres">
          <ul>
            {listGenres}
          </ul>
        </div>
        <div className="starRating__duration">
          <span>{duration}</span>
        </div>
        <div className="starRating__stars_container">
          <div className="starRating__stars">
            <ul>
              {stars}
            </ul>
          </div>
          <div className="starRating__rating">{rating}</div>
        </div>
      </div>
    </div>
  );
};


StarRating.propTypes = {
  title: propTypes.string,
  duration: propTypes.string,
  rating: propTypes.number,
  genres: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.number),
    propTypes.arrayOf(propTypes.string),
  ]),
};

StarRating.defaultProps = {
  title: 'Sorry, no title here',
  duration: 'Sorry, no duration here',
  rating: 1,
  genres: [99],
};
export default StarRating;
