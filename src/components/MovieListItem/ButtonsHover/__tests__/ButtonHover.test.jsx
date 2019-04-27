import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { ButtonHover } from '../ButtonHover';


it('ButtonHover renders well with query', () => {
  const renderer = new ShallowRenderer();
  const props = {
    location: { search: '?query=red' },
  };
  const result = renderer.render(<ButtonHover {...props} />);
  expect(result).toMatchSnapshot();
});

it('ButtonHover renders well without query', () => {
  const renderer = new ShallowRenderer();
  const props = {
    location: { search: '' },
  };
  const result = renderer.render(<ButtonHover {...props} />);
  expect(result).toMatchSnapshot();
});
