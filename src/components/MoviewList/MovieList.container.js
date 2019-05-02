import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

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
import { data, genres } from '../../modules/module_Search/selectors';
import MoviewList from './MovieList';


const mapStateToProps = createStructuredSelector({
  data,
  genres,
});


const mapDispatchToProps = {
  getInitFilms,
  getGenres,
  getFilms,
  getInitMovie,
  getCurrentMovie,
  getTrandingFilms,
  getTopRated,
  getComingSoonFilms,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviewList));
