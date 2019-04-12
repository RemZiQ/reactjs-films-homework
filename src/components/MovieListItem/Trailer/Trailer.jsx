import { Component } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

import './trailer.scss';

const modalContainer = document.getElementById('modal');


class Trailer extends Component {
  constructor(props) {
    super(props);
    this.modalContainer = modalContainer;
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(
      children,
      this.modalContainer,
    );
  }
}

Trailer.propTypes = {
  children: propTypes.element.isRequired,
};

export default Trailer;
