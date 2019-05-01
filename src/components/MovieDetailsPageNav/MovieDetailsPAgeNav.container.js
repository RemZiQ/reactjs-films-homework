import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getFilms, getGenres } from '../../modules/module_Search/actions';


import Nav from './MovieDetailsPageNav';

const mapStateToProps = store => ({ genres: store.genres });
const mapDispatchToProps = dispatch => ({
  fetchData: (search) => {
    dispatch(getFilms(search));
  },
  fetchGengres: () => {
    dispatch(getGenres());
  },
});

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps,
)(Nav));
