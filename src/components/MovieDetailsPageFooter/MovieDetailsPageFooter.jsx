import React from 'react';
import propTypes from 'prop-types';

import StarRating from '../MovieDetailsPageStarRating';
import Action from '../MovieDetailsPageAction';
import './movieDetailsPageFooter.scss';

const MovieDetailsPageFooter = ({ currentMovie }) => {
  if (currentMovie) {
    const { genres, id } = currentMovie;
    const rating = currentMovie.vote_average / 2;
    const hour = (currentMovie.runtime - (currentMovie.runtime % 60)) / 60;
    const duration = `${hour}h ${currentMovie.runtime - 60 * hour}m`;
    return (
      <div className="movieDetailsPage__footer">
        <StarRating
          title={currentMovie.title}
          genres={genres}
          duration={duration}
          rating={rating}
          id={id}
        />
        <Action info={currentMovie.overview} />
      </div>
    );
  }
  return (<div>Loading</div>);
};

MovieDetailsPageFooter.propTypes = {
  currentMovie: propTypes.objectOf(propTypes.any),
};

MovieDetailsPageFooter.defaultProps = {
  currentMovie: null,
};

export default MovieDetailsPageFooter;
