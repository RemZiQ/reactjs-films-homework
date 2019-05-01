import { connect } from 'react-redux';

import {
  getTrandingFilms,
  getTopRated,
  getComingSoonFilms,
  getByGenre,
} from '../../../modules/module_Search/actions';
import MovieListHeader from './MovieListHEader';


const mapDispatchToProps = dispatch => ({
  fetchTrandingData: () => {
    dispatch(getTrandingFilms());
  },
  fetchTopRatedData: () => {
    dispatch(getTopRated());
  },
  fetchComingSoonData: () => {
    dispatch(getComingSoonFilms());
  },
  fetchByGenre: (id) => {
    dispatch(getByGenre(id));
  },
});


export default connect(null, mapDispatchToProps)(MovieListHeader);