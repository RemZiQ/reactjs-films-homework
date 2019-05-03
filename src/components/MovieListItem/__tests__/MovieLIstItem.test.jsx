import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieListItem from '../MovieListItem';


it('MovieListItem renders well', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MovieListItem />);
  expect(result).toMatchSnapshot();
});
