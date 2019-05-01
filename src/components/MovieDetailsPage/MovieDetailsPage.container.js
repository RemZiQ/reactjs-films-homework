import { connect } from 'react-redux';
import MovieDetailsPage from './MovieDetailsPage';

const mapStateToProps = store => ({ currentMovie: store.currentMovie });

export default connect(mapStateToProps, null)(MovieDetailsPage);
