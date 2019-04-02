// Need to use buffer.js for auto updating project with help HMR

import React from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


import './components/MovieDetailsPage/reset.css';
import MovieDetailsPage from './components/MovieDetailsPage/index';
import MovieList from './components/MoviewList';
import store from './modules/store';






const component = () =>  {
  render(<Provider store={store}><MovieDetailsPage/></Provider>, document.getElementById('root'));
  render(<Provider store={store}><MovieList/></Provider>, document.getElementById('root2'));
}

component();
store.subscribe(component);
export default component;
