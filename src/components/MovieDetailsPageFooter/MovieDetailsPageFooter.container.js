import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { currentMovie } from '../../modules/module_Search/selectors';
import MovieDetailsPageFooter from './MovieDetailsPageFooter';

const mapStateToProps = createStructuredSelector({ currentMovie });

export default connect(mapStateToProps, null)(MovieDetailsPageFooter);
