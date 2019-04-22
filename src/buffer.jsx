// Need to use buffer.js for auto updating project with help HMR

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';


import './components/MovieDetailsPage/reset.css';
import App from './App';
import store from './modules/store';


const component = () => {
  render((
    <BrowserRouter>
      <Provider store={store}>
        <Route component={App} />
      </Provider>
    </BrowserRouter>),
  document.getElementById('root'));
};

component();
store.subscribe(component);
export default component;
