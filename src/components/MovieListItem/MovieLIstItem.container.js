import { connect } from 'react-redux';
import { getTrailer, noError } from '../../modules/module_Search/actions';
import MovieListItem from './MovieListItem';


const mapStateToProps = state => ({ trailer: state.currentTrailer, error: state.error });

const mapDispatchToProps = dispatch => ({
  fetchTrailer: (id) => {
    dispatch(getTrailer(id));
  },
  setToNoError: () => dispatch(noError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);
