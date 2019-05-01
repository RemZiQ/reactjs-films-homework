import { connect } from 'react-redux';

import MainInfo from './MovieListItemMainInfo';

const mapStateToProps = store => ({ storeGenres: store.genres });

export default connect(
  mapStateToProps, null,
)(MainInfo);
