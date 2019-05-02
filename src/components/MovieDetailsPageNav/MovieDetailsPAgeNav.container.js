import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';


import { genres } from '../../modules/module_Search/selectors';
import { getFilms, getGenres } from '../../modules/module_Search/actions';
import Nav from './MovieDetailsPageNav';

const mapStateToProps = createStructuredSelector({ genres });

const mapDispatchToProps = {
  getFilms,
  getGenres,
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps,
)(Nav));
