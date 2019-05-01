import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import { act, Simulate } from 'react-dom/test-utils';
import Action from '../Action';

let container;
let modal;

beforeEach(() => {
  container = document.createElement('div');
  container.setAttribute('id', 'modal');
  modal = document.createElement('div');
  modal.setAttribute('id', 'modal');
  document.body.appendChild(container);
  document.body.appendChild(modal);
});

afterEach(() => {
  document.body.removeChild(container);
  document.body.removeChild(modal);
  container = null;
  modal = null;
});

it('StarRating renders well without and with state { showTrailer: true }', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Action />);
  expect(result).toMatchSnapshot();
});

// it('example 3.0', () => {
//   act(() => {
//     const result = TestRenderer.create(<Action />, container);
//     console.log('4321', document.getElementById('modal').id);
//     // const instance = result.getInstance();
//     // const toogleTrailer = instance.toogleTrailer;
//     // toogleTrailer();
//     // expect(result.toJSON).toMatchSnapshot();
//   });
// });

