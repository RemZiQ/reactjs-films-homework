import React, { Component } from 'react';
import propTypes from 'prop-types';

import './trailerError.scss';

class TrailerError extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: error });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className="trailerError_container">
          <h2>Sorry, we dont have trailer for that film.</h2>
        </div>
      );
    }

    return children;
  }
}


TrailerError.propTypes = {
  children: propTypes.node.isRequired,
};

export default TrailerError;
