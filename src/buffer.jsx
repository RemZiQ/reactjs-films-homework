// Need to use buffer.js for auto updating project with help HMR

import React from 'react';
import { render } from 'react-dom';
import './components/MovieDetailsPage/reset.css';
import MovieDetailsPage from './components/MovieDetailsPage/index';



function component() {
  render(<MovieDetailsPage/>, document.getElementById('root'));
}

export default component;
