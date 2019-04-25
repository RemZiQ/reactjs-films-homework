import React from 'react';
import propTypes from 'prop-types';

const Iframe = ({ trailer, error }) => {
  if (error === true) {
    throw new Error('Here is no trailer');
  }
  return (
    <iframe title="trailer" src={trailer} width="640" height="480" frameBorder="0" allowFullScreen />
  );
};

Iframe.propTypes = {
  trailer: propTypes.string,
  error: propTypes.bool,
};

Iframe.defaultProps = {
  trailer: null,
  error: null,
};

export default Iframe;
