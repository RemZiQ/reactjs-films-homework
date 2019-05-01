import React, { PureComponent } from 'react';
import propTypes from 'prop-types';


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

      // needed for link`s share and get same result on the page
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
      !!id ? fetchInitMovie() : fetchCurrentMovie(id);
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


MoviewList.propTypes = {
  location: propTypes.objectOf(propTypes.any),
  fetchGengres: propTypes.func,
  fetchInitData: propTypes.func,
  fetchInitMovie: propTypes.func,
  fetchData: propTypes.func,
  fetchCurrentMovie: propTypes.func,
  fetchTrandingData: propTypes.func,
  fetchTopRatedData: propTypes.func,
  fetchComingSoonData: propTypes.func,
  store: propTypes.objectOf(propTypes.any),
};

MoviewList.defaultProps = {
  location: null,
  fetchGengres: null,
  fetchInitData: null,
  fetchInitMovie: null,
  fetchData: null,
  fetchCurrentMovie: null,
  fetchTrandingData: null,
  fetchTopRatedData: null,
  fetchComingSoonData: null,
  store: null,
};

export default MoviewList;
