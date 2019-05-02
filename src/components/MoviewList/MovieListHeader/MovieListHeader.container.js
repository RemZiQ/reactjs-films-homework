import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  getTrandingFilms,
  getTopRated,
  getComingSoonFilms,
  getByGenre,
} from '../../../modules/module_Search/actions';
import { genres } from '../../../modules/module_Search/selectors';
import MovieListHeader from './MovieListHEader';

const mapStateToProps = createStructuredSelector({ genres });

const mapDispatchToProps = {
  getTrandingFilms,
  getTopRated,
  getComingSoonFilms,
  getByGenre,
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieListHeader);
