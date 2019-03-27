import React from 'react';
import './style.scss';

const StarRating = ({
  title, duration, rating, genres,
}) => {
  const handling = (e) => {
    e.preventDefault();
    console.log("Some genre's search logic will be here");
  };
  const countOfStars = Math.round(rating);
  const listGenres = genres
    .map((item, index) => <li key={index}><a onClick={handling}>{item}</a></li>);
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

export default StarRating;
