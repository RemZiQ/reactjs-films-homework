// Need to use buffer.js for auto updating project with help HMR

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


import './components/MovieDetailsPage/reset.css';
import App from './App';
import store from './modules/store';


const component = () => {
  render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
};

component();
store.subscribe(component);
export default component;
