import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
// import { Provider } from 'react-redux';
// import { MovieDetailsPageFooter } from './MovieDetailsPageFooter';
import { Nav } from '../MovieDetailsPageNav';


it('Nav renders well', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Nav />);
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
