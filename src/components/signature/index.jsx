import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Signature extends React.Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}

Signature.propTypes = {
  name: PropTypes.string,
};

export default Signature;
