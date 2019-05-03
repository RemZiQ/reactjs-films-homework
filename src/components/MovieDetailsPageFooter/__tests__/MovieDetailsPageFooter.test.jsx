import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetailsPageFooter from '../MovieDetailsPageFooter';


it('renders well', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MovieDetailsPageFooter />);
  expect(result).toMatchSnapshot();
});
