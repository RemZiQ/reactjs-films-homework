import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Iframe } from '../Iframe';


it('Iframe renders well', () => {
  const props = {
    trailer: 'someUrl',
  };
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Iframe {...props} />);
  expect(result).toMatchSnapshot();
});

it('Iframe throw', () => {
  const props = {
    error: true,
  };
  const renderer = new ShallowRenderer();
  expect(() => renderer.render(<Iframe {...props} />)).toThrowError();
});
