import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  getInitFilms,
  getGenres,
  getFilms,
  getInitMovie,
  getCurrentMovie,
  getTrandingFilms,
  getTopRated,
  getComingSoonFilms,
} from '../../modules/module_Search/actions';

import MovieListItem from '../MovieListItem';
import MovieListHeader from './MovieListHeader';
import './movieList.scss';


class MoviewList extends PureComponent {
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
      fetchInitMovie,
      fetchData,
      fetchCurrentMovie,
      fetchTrandingData,
      fetchTopRatedData,
      fetchComingSoonData,
      store,
    } = this.props;

    if (location.pathname === '/') {
      if (!store.genres.length) {
        fetchGengres();
      }
      fetchInitData();
      fetchInitMovie();
    
    // }
    // // needed for link`s share and get same result on the page


      } else if (location.pathname === '/search') {
        const params = new URLSearchParams(location.search);
        const query = params.get('query');
        const id = params.get('id');
        switch (query) {
          case 'init793797112020979':
            fetchInitData();
            break;
          case 'Trending':
            fetchTrandingData();
            break;
          case 'Top Rated':
            fetchTopRatedData();
            break;
          case 'Coming soon':
            fetchComingSoonData();
            break;
          default:
            fetchData(query);
        }
        // query === 'init793797112020979' ? fetchInitData() : fetchData(query);
        id === null ? fetchInitMovie() : fetchCurrentMovie(id);
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
      <div>
        <MovieListHeader />
        <div className="moviewList__container">
          {listOfMovieItems}
        </div>
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
  fetchInitMovie: () => {
    dispatch(getInitMovie());
  },
  fetchCurrentMovie: (id) => {
    dispatch(getCurrentMovie(id));
  },
  fetchData: (search) => {
    dispatch(getFilms(search));
  },
  fetchGengres: () => {
    dispatch(getGenres());
  },
  fetchTrandingData: (id) => {
    dispatch(getTrandingFilms(id));
  },
  fetchTopRatedData: () => {
    dispatch(getTopRated());
  },
  fetchComingSoonData: () => {
    dispatch(getComingSoonFilms());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviewList));
