import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getCurrentMovie } from '../../../modules/module_Search/actions';
import ButtonHover from './ButtonHover';

const mapDispatchToProps = dispatch => ({
  fetchMovie: (ID) => {
    dispatch(getCurrentMovie(ID));
  },
});

export default withRouter(connect(null, mapDispatchToProps)(ButtonHover));