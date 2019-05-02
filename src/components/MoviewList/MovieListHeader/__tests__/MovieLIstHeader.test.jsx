import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieListHeader from '../MovieListHEader';


it('MovieListHeader renders well without props', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MovieListHeader />);
  expect(result).toMatchSnapshot();
});

it('MovieListHeader renders well with props', () => {
  const props = {
    genres: [
      {
        name: 'Action',
        id: 22,
      },
      {
        name: 'Action2',
        id: 23,
      },
      {
        name: 'Action3',
        id: 24,
      },
    ],
  };
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MovieListHeader {...props} />);
  expect(result).toMatchSnapshot();
});
