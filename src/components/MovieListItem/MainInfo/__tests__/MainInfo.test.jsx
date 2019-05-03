import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MainInfo from '../MovieListItemMainInfo';


it('MainInfo renders well with storeGenres', () => {
  const props = {
    genres: [1, 2],
    storeGenres: [{ id: 1, name: 'someGenre' }, { id: 2, name: 'someGenre2' }],
  };
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MainInfo {...props} />);
  expect(result).toMatchSnapshot();
});

it('MainInfo renders well without storeGenres', () => {
  const props = {
    genres: [1, 2],
    storeGenres: [],
  };
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MainInfo {...props} />);
  expect(result).toMatchSnapshot();
});
