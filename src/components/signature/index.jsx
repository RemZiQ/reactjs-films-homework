import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


const Signature = ({name}) => <h1>{name}</h1>;

Signature.propTypes = {
  name: PropTypes.string,
};

export default Signature;
