import { connect } from 'react-redux';
import MovieDetailsPageFooter from './MovieDetailsPageFooter';


const mapStateToProps = store => ({ currentMovie: store.currentMovie });


export default connect(mapStateToProps, null)(MovieDetailsPageFooter);
