import React from 'react';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import Renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import sinon from 'sinon';

import MoviewList from '../MovieList';
// import MoviewListItem from '../../MovieListItem/MovieListItem';


it('MoviewList renders well with out store', () => {
  const store = {
    data: { results: [] },
  };
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MoviewList {...store} />);
  expect(result).toMatchSnapshot();
});

it('MoviewList renders well with store', () => {
  const store = {
    data: { results: [1, 2, 3] },
  };
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MoviewList {...store} />);
  expect(result).toMatchSnapshot();
});

// describe('rendering', () => {
//   it('ComponentDidMount', () => {
//     const props = {
//       getInitFilms: () => {},
//       getGenres: () => {},
//       getFilms: () => {},
//       getInitMovie: () => {},
//       getCurrentMovie: () => {},
//       getTrandingFilms: () => {},
//       getTopRated: () => {},
//       getComingSoonFilms: () => {},
//     };
//     const getInitFilms = sinon.stub(props, 'getInitFilms');
//     const getGenres = sinon.stub(props, 'getGenres');
//     const getFilms = sinon.stub(props, 'getFilms');
//     const getInitMovie = sinon.stub(props, 'getInitMovie');
//     const getCurrentMovie = sinon.stub(props, 'getCurrentMovie');
//     const getTrandingFilms = sinon.stub(props, 'getTrandingFilms');
//     const getTopRated = sinon.stub(props, 'getTopRated');
//     const getComingSoonFilms = sinon.stub(props, 'getComingSoonFilms');
//     const renderer = new ShallowRenderer();
//     const wrapper = renderer.render(<MoviewList {...props} location={{ pathname: '/' }} genres={[]} data={{ results: [] }} />);
//     expect(getInitFilms.calledOnce).toBe(true);
//   });
// });
