import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { MoviewList } from '../MovieList';


it('MoviewList renders well with out store', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MoviewList store={{ data: { results: [] } }} />);
  expect(result).toMatchSnapshot();
});

it('MoviewList renders well with store', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MoviewList store={{ data: { results: [1, 2, 3] } }} />);
  expect(result).toMatchSnapshot();
});
