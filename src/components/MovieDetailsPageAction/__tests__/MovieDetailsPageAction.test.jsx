import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Action } from '../Action';


it('StarRating renders well', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Action />);
  expect(result).toMatchSnapshot();
});
