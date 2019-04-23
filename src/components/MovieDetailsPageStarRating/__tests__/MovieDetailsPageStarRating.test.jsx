import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
// import { Provider } from 'react-redux';
// import { MovieDetailsPageFooter } from './MovieDetailsPageFooter';
import { StarRating } from '../StarRating';


it('StarRating renders well', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<StarRating />);
  expect(result).toMatchSnapshot();
});

// it('renders well2222', () => {
//   const renderer = new ShallowRenderer();
//   const result = renderer.render(<MovieDetailsPageFooter store={{}} />);
//   expect(result).toMatchSnapshot();
// });

// it('renders well', () => {
//   const renderer = new ShallowRenderer();
//   const result = renderer.render(<MovieDetailsPageFooter store={null} />);
//   expect(result).toMatchSnapshot();
// });
