import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Overview } from '../Overview';


it('Overview renders well', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Overview />);
  expect(result).toMatchSnapshot();
});
