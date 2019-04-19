import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { getInitFilms, getGenres, getFilms } from '../../modules/module_Search/actions';
import MovieListItem from '../MovieListItem';
import './movieList.scss';


class MoviewList extends React.Component {
  constructor(props) {
    super(props);
    this.listOfMovieItems = '';
  }

  componentDidMount() {
    const {
      location,
      match,
      fetchGengres,
      fetchInitData,
      fetchData,
      store
    } = this.props;

    if (location.pathname === '/') {
      if (!store.genres.length) {
        fetchGengres();
      }
      fetchInitData();
    } else if (location.pathname === '/search') {
      const params = new URLSearchParams(location.search);
      const query = params.get('query');
      fetchData(query);
    }
  }

  componentDidUpdate() {
    const { match, location } = this.props;
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
const mapDispatchToProps = dispatch => ({
  fetchInitData: () => {
    dispatch(getInitFilms());
  },
  fetchData: (search) => {
    dispatch(getFilms(search));
  },
  fetchGengres: () => {
    dispatch(getGenres());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviewList));
