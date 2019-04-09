import { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import './trailer.scss';

// const Trailer = ({ handle, trailer, id }) => (
//   <div className="movieList__item__trailer">
//     <button type="submit" onClick={handle} className="movieList__item__trailer_closeButton">
//       <i className="fas fa-times" />
//     </button>
//     <iframe title={`trailer${id}`} style={{ backgroundColor: '#000' }} name="trailer" width="640" height="480" frameBorder="0" allowFullScreen src={trailer} />
//   </div>
// );

// Trailer.propTypes = {
//   handle: propTypes.func.isRequired,
//   trailer: propTypes.string,
//   id: propTypes.number.isRequired,
// };
// Trailer.defaultProps = {
//   trailer: 'https://www.youtube.com/embed/kVrqfYjkTdQ',
// };


// const mapStateToProps = state => ({ trailer: state.currentTrailer });

// export default connect(mapStateToProps)(Trailer);

const modalContainer = document.getElementById('modal');


class Trailer extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.modalContainer = modalContainer;
  }

  componentDidMount() {
    modalContainer.appendChild(this.el);
  }

  componentWillUnmount() {
    modalContainer.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    {console.log(children)}
    return ReactDOM.createPortal(
      children,
      this.el,
    );
  }
}

// Trailer.propTypes = {
//   // handle: propTypes.func.isRequired,
//   // trailer: propTypes.string,
//   // id: propTypes.number.isRequired,
//   children: propTypes.element.isRequired,
// };

export default Trailer;
