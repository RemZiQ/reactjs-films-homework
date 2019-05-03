import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { genres } from '../../../modules/module_Search/selectors';
import MainInfo from './MovieListItemMainInfo';


const mapStateToProps = createStructuredSelector({ storeGenres: genres });


export default connect(
  mapStateToProps, null,
)(MainInfo);
