import React from 'react';
import './action.scss';
import propTypes from 'prop-types';

const Action = ({ info }) => (
  <div className="action_container">
    <div className="action_info">{info}</div>
    <div className="action__buttons_container">
      <button type="button" className="action__watch">Watch now</button>
      <button type="button" className="action__view">View info</button>
    </div>
  </div>
);

Action.propTypes = {
  info: propTypes.string,
};

Action.defaultProps = {
  info: 'Sorry, no information here',
};

export default Action;
