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
  urlAPI,
  keyAPI,
  lang,
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


// test for async actions

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH__DATA when fetching data has been done', () => {
    fetchMock.get(`begin:${urlAPI}/search/movie?`, { someData: 'someData' });
    const store = mockStore({});
    const search = 'something';
    const answer = [{
      type: 'FETCH__DATA',
      payload: { someData: 'someData' },
    }];
    return store.dispatch(getFilms(search)).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('catch error if statusCode !==200 when getFilms called', () => {
    fetchMock.get(`begin:${urlAPI}/search/movie?`, 500);
    const store = mockStore({});
    const answer = [];
    return store.dispatch(getFilms()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('creates FETCH__DATA when fetching genres has been done', () => {
    fetchMock.get(`${urlAPI}/movie/top_rated?${keyAPI}&language=en-US&page=1`, { someData: 'someData' });
    const store = mockStore({});
    const answer = [{
      type: 'FETCH__DATA',
      payload: { someData: 'someData' },
    }];
    return store.dispatch(getInitFilms()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('catch error if statusCode !==200 when getInitFilms called', () => {
    fetchMock.get(`${urlAPI}/movie/top_rated?${keyAPI}&language=en-US&page=1`, 500);
    const store = mockStore({});
    const answer = [];
    return store.dispatch(getInitFilms()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('creates FETCH_GENRES when fetching genres has been done', () => {
    const responce = [{ id: 28, name: 'Action' }, { id: 29, name: 'Action2' }];
    fetchMock.get(`${urlAPI}/genre/movie/list?${keyAPI}&language=en-US`, responce);
    const store = mockStore({});
    const answer = [{
      type: 'FETCH_GENRES',
      payload: responce,
    }];
    return store.dispatch(getGenres()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('catch error if statusCode !==200 when getGenres called', () => {
    fetchMock.get(`${urlAPI}/genre/movie/list?${keyAPI}&language=en-US`, 500);
    const store = mockStore({});
    const answer = [];
    return store.dispatch(getGenres()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('creates FETCH_TRAILER; and NO_ERROR_TRAILER when fetching trailer has been done', () => {
    const response = {
      id: 22,
      results: [{ key: 'someKey' }, { key: 'someKey' }],
    };
    const id = 1;
    fetchMock.get(`${urlAPI}/movie/${id}/videos?${keyAPI}`, response);
    const store = mockStore({});
    const answer = [
      {
        type: 'NO_ERROR_TRAILER',
      },
      {
        type: 'FETCH_TRAILER',
        payload: `https://www.youtube.com/embed/${response.results[0].key}`,
      },
    ];
    return store.dispatch(getTrailer(id)).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('creates FETCH_TRAILER and ERROR_TRAILER when getTrailer throws', () => {
    const response = {
      id: 1,
      results: {},
    };
    const id = 1;
    fetchMock.get(`${urlAPI}/movie/${id}/videos?${keyAPI}`, response);
    const store = mockStore({});
    const answer = [
      {
        type: 'ERROR_TRAILER',
      },
    ];
    return store.dispatch(getTrailer(id)).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });


  it('creates FETCH__MOVIE when getTrailer called', () => {
    const response = {
      someData: 'someData',
    };
    const id = 1;
    fetchMock.get(`${urlAPI}/movie/${id}?${keyAPI}&${lang}`, response);
    const store = mockStore({});
    const answer = [
      {
        type: 'FETCH__MOVIE',
        payload: response,
      },
    ];
    return store.dispatch(getCurrentMovie(id)).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('catch error if statusCode !==200 when getCurrentMovie called', () => {
    const id = 1;
    fetchMock.get(`${urlAPI}/movie/${id}?${keyAPI}&${lang}`, 500);
    const store = mockStore({});
    const answer = [];
    return store.dispatch(getCurrentMovie(id)).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  // it('catch error if statusCode !==200 when getTrailer called and create ERROR_TRAILER', () => {
  //   const id = 1;
  //   fetchMock.get(`${urlAPI}/movie/${id}/videos?${keyAPI}`, 500);
  //   const store = mockStore({});
  //   const answer = [];
  //   return store.dispatch(getTrailer(id)).then(() => {
  //     const result = store.getActions();
  //     expect(result).toEqual(answer);
  //   });
  // });

  it('creates FETCH__MOVIE when getInitMovie called', () => {
    const response = {
      someData: 'someData',
    };
    fetchMock.get(`${urlAPI}/movie/259316?${keyAPI}&${lang}`, response);
    const store = mockStore({});
    const answer = [
      {
        type: 'FETCH__MOVIE',
        payload: response,
      },
    ];
    return store.dispatch(getInitMovie()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('catch error if statusCode !==200 when getInitMovie called', () => {
    fetchMock.get(`${urlAPI}/movie/259316?${keyAPI}&${lang}`, 500);
    const store = mockStore({});
    const answer = [];
    return store.dispatch(getInitMovie()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('creates FETCH__DATA when getTrandingFilms called', () => {
    const response = {
      someData: 'someData',
    };
    fetchMock.get(`${urlAPI}/movie/popular?${keyAPI}&${lang}`, response);
    const store = mockStore({});
    const answer = [
      {
        type: 'FETCH__DATA',
        payload: response,
      },
    ];
    return store.dispatch(getTrandingFilms()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('catch error if statusCode !==200 when getTrandingFilms called', () => {
    fetchMock.get(`${urlAPI}/movie/popular?${keyAPI}&${lang}`, 500);
    const store = mockStore({});
    const answer = [];
    return store.dispatch(getTrandingFilms()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('creates FETCH__DATA when getTopRated called', () => {
    const response = {
      someData: 'someData',
    };
    fetchMock.get(`${urlAPI}/movie/top_rated?${keyAPI}&${lang}`, response);
    const store = mockStore({});
    const answer = [
      {
        type: 'FETCH__DATA',
        payload: response,
      },
    ];
    return store.dispatch(getTopRated()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('catch error if statusCode !==200 when getTopRated called', () => {
    fetchMock.get(`${urlAPI}/movie/top_rated?${keyAPI}&${lang}`, 500);
    const store = mockStore({});
    const answer = [];
    return store.dispatch(getTopRated()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('creates FETCH__DATA when getComingSoonFilms called', () => {
    const response = {
      someData: 'someData',
    };
    fetchMock.get(`${urlAPI}/movie/upcoming?${keyAPI}&${lang}`, response);
    const store = mockStore({});
    const answer = [
      {
        type: 'FETCH__DATA',
        payload: response,
      },
    ];
    return store.dispatch(getComingSoonFilms()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });

  it('catch if statusCode !==200 when getComingSoonFilms called', () => {
    fetchMock.get(`${urlAPI}/movie/upcoming?${keyAPI}&${lang}`, 500);
    const store = mockStore({});
    const answer = [];
    return store.dispatch(getComingSoonFilms()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(answer);
    });
  });
});
