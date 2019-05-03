import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MoviewList from '../MovieList';


it('MoviewList renders well with out store', () => {
  const store = {
    data: { results: [] },
  };
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MoviewList {...store} />);
  expect(result).toMatchSnapshot();
});

it('MoviewList renders well with store', () => {
  const store = {
    data: { results: [1, 2, 3] },
  };
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MoviewList {...store} />);
  expect(result).toMatchSnapshot();
});
