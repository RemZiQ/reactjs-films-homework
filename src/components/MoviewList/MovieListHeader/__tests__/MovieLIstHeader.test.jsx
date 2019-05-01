import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieListHeader from '../MovieListHEader';


it('StarRating renders well without and with state { showTrailer: true }', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MovieListHeader />);
  expect(result).toMatchSnapshot();
});
