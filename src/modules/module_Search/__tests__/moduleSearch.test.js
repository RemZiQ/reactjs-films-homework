import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';


import {
  fetchData,
  fetchGenres,
  fetchTrailer,
  fetchMovie,
  errorTrailer,
  noError,
  getFilms,
  getComingSoonFilms,
  getCurrentMovie,
  getGenres,
  getInitFilms,
  getInitMovie,
  getTopRated,
  getTrailer,
  getTrandingFilms,
} from '../actions';
import reducer from '../reducer';


describe('Search reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        data: {},
        genres: [],
        error: false,
      },
    );
  });

  it('should return state with fetched data', () => {
    expect(reducer(undefined, {
      type: 'FETCH__DATA',
      payload: { someDataRecived: 'someData' },
    })).toEqual(
      {
        data: { someDataRecived: 'someData' },
        genres: [],
        error: false,
      },
    );
  });

  it('should return state with fetched genres', () => {
    expect(reducer(undefined, {
      type: 'FETCH_GENRES',
      payload: { genres: ['first', 'second'] },
    })).toEqual(
      {
        data: {},
        genres: ['first', 'second'],
        error: false,
      },
    );
  });

  it('should return state with fetched trailer', () => {
    expect(reducer(undefined, {
      type: 'FETCH_TRAILER',
      payload: 'someURL',
    })).toEqual(
      {
        data: {},
        genres: [],
        error: false,
        currentTrailer: 'someURL',
      },
    );
  });

  it('should return state with state error - true', () => {
    expect(reducer(undefined, {
      type: 'ERROR_TRAILER',
    })).toEqual(
      {
        data: {},
        genres: [],
        error: true,
      },
    );
  });

  it('should return state with state error - false', () => {
    expect(reducer(undefined, {
      type: 'NO_ERROR_TRAILER',
    })).toEqual(
      {
        data: {},
        genres: [],
        error: false,
      },
    );
  });

  it('should return state with state error - false', () => {
    expect(reducer(undefined, {
      type: 'FETCH__MOVIE',
      payload: { someDataRecived: 'someData' },
    })).toEqual(
      {
        data: {},
        genres: [],
        error: false,
        currentMovie: { someDataRecived: 'someData' },
      },
    );
  });
});


describe('actionCreators', () => {
  it('should create an action to set "No error"', () => {
    const expectedAction = {
      type: 'NO_ERROR_TRAILER',
    };
    expect(noError()).toEqual(expectedAction);
  });
  it('should create an action to set "Error trailer"', () => {
    const expectedAction = {
      type: 'ERROR_TRAILER',
    };
    expect(errorTrailer()).toEqual(expectedAction);
  });
  it('should create an action to add Data', () => {
    const data = { someData: 'someData' };
    const expectedAction = {
      type: 'FETCH__DATA',
      payload: data,
    };
    expect(fetchData(data)).toEqual(expectedAction);
  });
  it('should create an action to add genres', () => {
    const data = { someGenres: [{ id: 1, name: 'firstGenre' }, { id: 2, name: 'secondGenre' }] };
    const expectedAction = {
      type: 'FETCH_GENRES',
      payload: data,
    };
    expect(fetchGenres(data)).toEqual(expectedAction);
  });
  it('should create an action to add trailer', () => {
    const data = 'someURL';
    const expectedAction = {
      type: 'FETCH_TRAILER',
      payload: data,
    };
    expect(fetchTrailer(data)).toEqual(expectedAction);
  });
  it('should create an action to add current Movie', () => {
    const data = { someMovie: 'someinfo' };
    const expectedAction = {
      type: 'FETCH__MOVIE',
      payload: data,
    };
    expect(fetchMovie(data)).toEqual(expectedAction);
  });
});
