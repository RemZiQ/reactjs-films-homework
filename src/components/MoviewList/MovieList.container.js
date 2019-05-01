import { connect } from 'react-redux';
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
import MoviewList from './MovieList';

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
