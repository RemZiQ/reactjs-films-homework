import React from 'react';
import { connect } from 'react-redux';

import './style.scss';
import MovieListItem from '../MovieList__Item/index2';
// import state from '../../modules/store';


const MoviewList = ({ count, store }) => {
  let listOfMovieItems = '';
  if (store.data.results) {
    listOfMovieItems = store.data.results.map(item => (
      <MovieListItem
        key={item.id}
        imageUrl={item.poster_path}
        title={item.title}
        genres={item.genre_ids}
        mark={+(item.vote_average / 2)}
        id={item.id}
        overview={item.overview}
      />
    ));
  }

  return (
    <div className="moviewList__container">
      {listOfMovieItems}
    </div>
  );
};

const mapStateToProps = state => ({ store: state });

export default connect(mapStateToProps)(MoviewList);
