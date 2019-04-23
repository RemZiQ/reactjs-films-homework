import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import StarRating from '../MovieDetailsPageStarRating';
import Action from '../MovieDetailsPageAction';
import './movieDetailsPageFooter.scss';

export const MovieDetailsPageFooter = ({ store }) => {
  if (store) {
    const { genres, id } = store;
    const rating = store.vote_average / 2;
    const hour = (store.runtime - (store.runtime % 60)) / 60;
    const duration = `${hour}h ${store.runtime - 60 * hour}m`;
    return (
      <div className="movieDetailsPage__footer">
        <StarRating
          title={store.title}
          genres={genres}
          duration={duration}
          rating={rating}
          id={id}
        />
        <Action info={store.overview} />
      </div>
    );
  }
  return (<div>Loading</div>);
};

MovieDetailsPageFooter.propTypes = {
  store: propTypes.objectOf(propTypes.any),
};

MovieDetailsPageFooter.defaultProps = {
  store: null,
};

const mapStateToProps = store => ({ store: store.currentMovie });


export default connect(mapStateToProps, null)(MovieDetailsPageFooter);
