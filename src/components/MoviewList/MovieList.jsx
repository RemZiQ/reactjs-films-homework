import React, { PureComponent, Component } from 'react';
import propTypes from 'prop-types';


import MovieListItem from '../MovieListItem';
import MovieListHeader from './MovieListHeader';
import './movieList.scss';


class MoviewList extends Component {
  constructor(props) {
    super(props);
    this.listOfMovieItems = '';
  }

  componentDidMount() {
    const {
      location,
      getInitFilms,
      getGenres,
      getFilms,
      getInitMovie,
      getCurrentMovie,
      getTrandingFilms,
      getTopRated,
      getComingSoonFilms,
      genres,
    } = this.props;

    if (location.pathname === '/') {
      if (!genres.length) {
        getGenres();
      }
      getInitFilms();
      getInitMovie();

      // needed for link`s share and get same result on the page
    } else if (location.pathname === '/search') {
      if (!genres.length) {
        getGenres();
      }
      const params = new URLSearchParams(location.search);
      const query = params.get('query');
      const id = params.get('id');
      switch (query) {
        case 'init793797112020979':
          getInitFilms();
          break;
        case 'Trending':
          getTrandingFilms();
          break;
        case 'Top Rated':
          getTopRated();
          break;
        case 'Coming soon':
          getComingSoonFilms();
          break;
        default:
          getFilms(query);
      }
      !!id ? getCurrentMovie(id) : getInitMovie();
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props === nextProps) return false;
    return true;
  }

  render() {
    let listOfMovieItems = '';
    const { data } = this.props;
    if (data.results) {
      listOfMovieItems = data.results.map(item => (
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
  data: propTypes.objectOf(propTypes.any).isRequired,
  genres: propTypes.arrayOf(propTypes.any).isRequired,
  location: propTypes.objectOf(propTypes.any),
  getInitFilms: propTypes.func.isRequired,
  getGenres: propTypes.func.isRequired,
  getFilms: propTypes.func.isRequired,
  getInitMovie: propTypes.func.isRequired,
  getCurrentMovie: propTypes.func.isRequired,
  getTrandingFilms: propTypes.func.isRequired,
  getTopRated: propTypes.func.isRequired,
  getComingSoonFilms: propTypes.func.isRequired,
};

MoviewList.defaultProps = {
  location: null,
};

export default MoviewList;
