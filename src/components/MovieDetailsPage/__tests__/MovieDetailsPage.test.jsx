import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetailsPage from '../MovieDetailsPage';


it('MovieDetailsPage renders well without props', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MovieDetailsPage />);
  expect(result).toMatchSnapshot();
});

it('MovieDetailsPage renders well with props', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MovieDetailsPage currentMovie={{ backdrop_path: 'abc' }} />);
  expect(result).toMatchSnapshot();
});
