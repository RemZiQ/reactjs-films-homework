import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { currentMovie } from '../../modules/module_Search/selectors';
import MovieDetailsPage from './MovieDetailsPage';

const mapStateToProps = createStructuredSelector({ currentMovie });

export default connect(mapStateToProps, null)(MovieDetailsPage);
