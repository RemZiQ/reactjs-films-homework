import React from 'react';
import { connect } from 'react-redux';

import StarRating from '../MovieDetailsPageStarRating';
import Action from '../MovieDetailsPageAction';
import './movieDetailsPageFooter.scss';

const movieDetailsPageFooter = ({ store }) => {
  if (store) {
    const genres = store.genres.map(elem => elem.name);
    const rating = store.vote_average / 2;
    const hour = (store.runtime - (store.runtime % 60)) / 60;
    const duration = `${hour}h ${store.runtime - 60 * hour}m`;
    return (
      <div className="movieDetailsPage__footer">
        <StarRating title={store.title} genres={genres} duration={duration} rating={rating} />
        <Action info={store.overview} />
      </div>
    );
  }
  return (<div>Loading</div>);
};

const mapStateToProps = store => ({ store: store.currentMovie });


export default connect(mapStateToProps, null)(movieDetailsPageFooter);
