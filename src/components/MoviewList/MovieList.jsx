import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import './movieList.scss';
import MovieListItem from '../MovieListItem';


class MoviewList extends React.Component {
  constructor(props) {
    super(props);
    this.listOfMovieItems = '';
  }

  componentDidMount() {
    const { location } = this.props;
    if (location) {
      console.log(location.search);
    }
  }

  render() {
    let listOfMovieItems = '';
    const { store } = this.props;
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
  }
}


MoviewList.propTypes = {
  store: propTypes.objectOf(
    propTypes.any,
  ).isRequired,
};

const mapStateToProps = state => ({ store: state });

export default connect(mapStateToProps)(MoviewList);
