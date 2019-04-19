import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MovieDetailsPage from './components/MovieDetailsPage';
import MovieList from './components/MoviewList';


const App = ({ location }) => {
  const params = new URLSearchParams(location.search);
  return (
    <div>
      <MovieDetailsPage query={params.get('query')} />
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/:search" component={MovieList} />
      </Switch>
    </div>
  );
};

export default App;
