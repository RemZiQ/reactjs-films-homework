import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getTrailer, noError } from '../../modules/module_Search/actions';
import { currentTrailer, error } from '../../modules/module_Search/selectors';
import MovieListItem from './MovieListItem';


const mapStateToProps = createStructuredSelector({
  currentTrailer,
  error,
});

const mapDispatchToProps = {
  getTrailer,
  noError,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);
