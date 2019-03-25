import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


const Signature = (props) => <h1>{props.name}</h1>

Signature.propTypes = {
  name: PropTypes.string,
};

export default Signature;
