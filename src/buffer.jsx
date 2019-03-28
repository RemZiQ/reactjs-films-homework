// Need to use buffer.js for auto updating project with help HMR

import React from 'react';
import { render } from 'react-dom';
import './components/MovieDetailsPage/reset.css';
import MovieDetailsPage from './components/MovieDetailsPage/index';
import MovieList from './components/MoviewList';

let example = 0;

  function getResult(){
    return new Promise(resolve => {
      fetch('https://api.themoviedb.org/3/search/movie?api_key=549663e4fb316b398fa37766692d00b7&language=en-US&query=Something&page=1&include_adult=false&year=2012')
        .then(response => response.json())
        .then(data => {
          resolve(data);
        });
    })
  }

  async function updateResult(){
    example = await getResult();
    example = example.results.map(item => item.poster_path);
  }




async function component() {
  render(<MovieDetailsPage />, document.getElementById('root'));
  await updateResult();
  render(<MovieList count={example}/>, document.getElementById('root2'));
}

export default component;
