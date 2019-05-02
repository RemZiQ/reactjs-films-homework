import React from 'react';
import { Route, Switch } from 'react-router-dom';
import propTypes from 'prop-types';

import MovieDetailsPage from './components/MovieDetailsPage';
import MovieList from './components/MoviewList';


const App = ({ location }) => {
  console.log(location);
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

App.propTypes = {
  location: propTypes.objectOf(propTypes.any).isRequired,
};

export default App;
