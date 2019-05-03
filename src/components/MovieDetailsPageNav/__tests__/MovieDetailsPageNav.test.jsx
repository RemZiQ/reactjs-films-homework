import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Nav from '../MovieDetailsPageNav';


it('Nav renders well', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Nav />);
  expect(result).toMatchSnapshot();
});
