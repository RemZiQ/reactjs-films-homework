import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { currentTrailer, currentMovie, error } from '../../modules/module_Search/selectors';
import { getTrailer, noError } from '../../modules/module_Search/actions';
import Action from './Action';


const mapStateToProps = createStructuredSelector({
  currentTrailer,
  currentMovie,
  error,
});

const mapDispatchToProps = {
  getTrailer,
  noError,
};


export default connect(mapStateToProps, mapDispatchToProps)(Action);
