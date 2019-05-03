import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { TrailerError } from '../TrailerError';


it('TrailerError renders well', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<TrailerError />);
  expect(result).toMatchSnapshot();
});
