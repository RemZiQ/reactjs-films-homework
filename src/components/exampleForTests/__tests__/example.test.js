import React from 'react';
import renderer from 'react-test-renderer';
import Example from '../example';


it('renders well', () => {
  const tree2 = renderer.create(<Example />).toJSON();
  expect(tree2).toMatchSnapshot();
});
