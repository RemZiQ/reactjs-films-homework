import { connect } from 'react-redux';
import { getTrailer, noError } from '../../modules/module_Search/actions';
import Action from './Action';

const mapStateToProps = store => ({
  currentMovie: store.currentMovie,
  currentTrailer: store.currentTrailer,
  error: store.error,
});
const mapDispatchToProps = dispatch => ({
  fetchTrailer: (id) => {
    dispatch(getTrailer(id));
  },
  setToNoError: () => dispatch(noError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Action);
