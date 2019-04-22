import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { getTrailer, noError } from '../../modules/module_Search/actions';
import Trailer from '../MovieListItem/Trailer';
import TrailerError from '../MovieListItem/TrailerError';
import Iframe from '../MovieListItem/Trailer/Iframe';
import './action.scss';

class Action extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      showTrailer: false,
    };
  }

  toogleInfo = () => {
    const { showInfo } = this.state;
    this.setState({ showInfo: !showInfo });
  };

  toogleTrailer = () => {
    const { showTrailer } = this.state;
    this.setState({ showTrailer: !showTrailer });
  };

  showTrailer = () => {
    const { fetchTrailer } = this.props;
    const { currentMovie } = this.props;
    fetchTrailer(currentMovie.id);
    this.toogleTrailer();
  };

  render() {
    const { info, setToNoError } = this.props;
    const { showInfo, showTrailer } = this.state;
    const infoToggled = showInfo ? <div className="action_info">{info}</div> : null;
    const { currentTrailer, error } = this.props;
    const closeTrailer = () => {
      this.toogleTrailer();
      setToNoError();
    };
    // must be added trailer
    if (showTrailer) {
      return (
        <div className="action_container">
          {infoToggled}
          <div className="action__buttons_container">
            <button onClick={this.showTrailer} type="button" className="action__watch">Watch now</button>
            <button onClick={this.toogleInfo} type="button" className="action__view">View info</button>
            <Trailer>
              <div className="Trailer">
                <button onClick={closeTrailer} type="button" id={123} className="movieList__item__trailer_closeButton">
                  <i className="fas fa-times" />
                </button>
                <TrailerError>
                  <Iframe trailer={currentTrailer} error={error} />
                </TrailerError>
              </div>
            </Trailer>
          </div>
        </div>
      );
    }
    return (
      <div className="action_container">
        {infoToggled}
        <div className="action__buttons_container">
          <button onClick={this.showTrailer} type="button" className="action__watch">Watch now</button>
          <button onClick={this.toogleInfo} type="button" className="action__view">View info</button>
        </div>
      </div>
    );
  }
}

Action.propTypes = {
  info: propTypes.string,
  currentMovie: propTypes.objectOf(propTypes.any).isRequired,
  currentTrailer: propTypes.string,
  error: propTypes.bool.isRequired,
  fetchTrailer: propTypes.func.isRequired,
  setToNoError: propTypes.func.isRequired,
};

Action.defaultProps = {
  info: 'Sorry, no information here',
  currentTrailer: 'https://www.youtube.com/watch?v=kVrqfYjkTdQ&t',
};

const mapStateToProps = store => ({
  currentMovie: store.currentMovie,
  currentTrailer: store.currentTrailer,
  error: store.error,
});
const mapDispatchToProps = dispatch => ({
  fetchTrailer: (id) => {
    dispatch(getTrailer(id));
  },
  setToNoError: () => dispatch(noError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Action);
