import React, { Component } from 'react';

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

export default TrailerError;


//  render() {
//   const { hasError } = this.state;
//   const { children } = this.props;
//   if (hasError) {
//     return (
//       <div className="trailerError_container">
//         <h1>Something went wrong.</h1>
//       </div>
//     );
//   }

//   return children;
// }
