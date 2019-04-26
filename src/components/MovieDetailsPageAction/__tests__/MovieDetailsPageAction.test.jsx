import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { Action } from '../Action';
import { Trailer } from '../../MovieListItem/Trailer'

it('StarRating renders well without and with state { showTrailer: true }', () => {
  const renderer = new ShallowRenderer();
  let result = renderer.render(<Action />);
  expect(result).toMatchSnapshot();
  // change state for render Trailer
  // result = renderer.render(<Action fetchTrailer={() => {}} currentMovie={{ id: 123 }} />);
  // const handler = result.props.children[1].props.children[0].props.onClick;
  // handler();
  // result = renderer.getRenderOutput();
  // expect(result).toMatchSnapshot();
});

// it('StarRating renders well without and with state { showTrailer: true }', () => {
//   jest.mock('../../MovieListItem/Trailer', () => () => <div />);
//   const testRenderer = TestRenderer.create(<Action />);
//   const example = testRenderer.getInstance();
//   example.setState({ showTrailer: true });
//   console.log(example.state);
// result = renderer.getRenderOutput();
// expect(result).toMatchSnapshot();
// });
// let container;

// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   document.body.removeChild(container);
//   container = null;
// });

// it('StarRating renders well with state { showTrailer: true }', () => {
//   // Test first render and componentDidMount
//   act(() => {
//     ReactDOM.render(<Action />, container);
//   });
//   const button = container.getElementsByClassName('action__watch');
//   console.log(button);
//   act(() => {
//     button.dispatchEvent(new MouseEvent('click'));
//   });
// const button = container.querySelector('button');
// const label = container.querySelector('p');
// expect(label.textContent).toBe('You clicked 0 times');
// expect(document.title).toBe('You clicked 0 times');

// // Test second render and componentDidUpdate
// act(() => {
//   button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
// });
// expect(label.textContent).toBe('You clicked 1 times');
// expect(document.title).toBe('You clicked 1 times');
// });

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
