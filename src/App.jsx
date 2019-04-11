import React from 'react';
import { Route } from 'react-router-dom';

import MovieDetailsPage from './components/MovieDetailsPage';
import MovieList from './components/MoviewList';


const App = () => (
  <div>
    <MovieDetailsPage />
    <MovieList />
  </div>
);

export default App;
