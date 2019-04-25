import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Action } from '../Action';

it('StarRating renders well without and with state { showTrailer: true }', () => {
  const renderer = new ShallowRenderer();
  let result = renderer.render(<Action />);
  expect(result).toMatchSnapshot();
  // change state for render Trailer
  result = renderer.render(<Action fetchTrailer={() => {}} currentMovie={{ id: 123 }} />);
  const handler = result.props.children[1].props.children[0].props.onClick;
  handler();
  result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

// it('StarRating renders well with state { showTrailer: true }', () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<Action fetchTrailer={() => {}} currentMovie={{ id: 123 }} />);
//   const result2 = renderer.getRenderOutput();
//   console.log('!!!!!!!!!!!!!!!!!!!!!', result2.props.children[1].props.children[0].props.onClick);
//   const handler = result2.props.children[1].props.children[0].props.onClick;
//   handler();
//   const result3 = renderer.getRenderOutput();
//   console.log(result3);
//   expect(result3).toMatchSnapshot();
// });
