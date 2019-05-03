export const fetchData = data => ({ type: 'FETCH__DATA', payload: data });

export const fetchGenres = genres => ({ type: 'FETCH_GENRES', payload: genres });

export const fetchTrailer = url => ({ type: 'FETCH_TRAILER', payload: url });

export const fetchMovie = data => ({ type: 'FETCH__MOVIE', payload: data });

export const errorTrailer = () => ({ type: 'ERROR_TRAILER' });

export const noError = () => ({ type: 'NO_ERROR_TRAILER' });

export const urlAPI = 'https://api.themoviedb.org/3';
export const keyAPI = 'api_key=549663e4fb316b398fa37766692d00b7';
export const lang = 'language=en-US';

export const getFilms = search => (dispatch) => {
  return fetch(`${urlAPI}/search/movie?${keyAPI}&language=en-US&query=${search}&page=1&include_adult=false`)
    .then((response) => {
      if (response.statusText !== 'OK') {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then(data => dispatch(fetchData(data)))
    .catch(error => console.log('something went wrong.', error));
};

export const getInitFilms = () => (dispatch) => {
  return fetch(`${urlAPI}/movie/top_rated?${keyAPI}&language=en-US&page=1`)
    .then((response) => {
      if (response.statusText !== 'OK') {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    }).then(data => dispatch(fetchData(data))).catch(error => console.log('something went wrong.', error));
};

export const getGenres = () => (dispatch) => {
  return fetch(`${urlAPI}/genre/movie/list?${keyAPI}&language=en-US`)
    .then((response) => {
      if (response.statusText !== 'OK') {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then(data => dispatch(fetchGenres(data))).catch(error => console.log('something went wrong.', error));
};

export const getTrailer = (ID) => {
  const id = ID;
  return (dispatch) => {
    return fetch(`${urlAPI}/movie/${id}/videos?${keyAPI}`)
      .then((response) => {
        if (response.statusText !== 'OK') {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .catch(error => console.log('something went wrong.', error))
      .then((data) => {
        if (data.results.length) {
          dispatch(noError());
          return dispatch(fetchTrailer(`https://www.youtube.com/embed/${data.results[0].key}`));
        }
        return dispatch(errorTrailer());
      });
  };
};

export const getCurrentMovie = (ID) => {
  const id = ID;
  return (dispatch) => {
    return fetch(`${urlAPI}/movie/${id}?${keyAPI}&${lang}`)
      .then((response) => {
        if (response.statusText !== 'OK') {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      }).then(data => dispatch(fetchMovie(data))).catch(error => console.log('something went wrong.', error));
  };
};

export const getInitMovie = () => (dispatch) => {
  return fetch(`${urlAPI}/movie/259316?${keyAPI}&${lang}`)
    .then((response) => {
      if (response.statusText !== 'OK') {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    }).then(data => dispatch(fetchMovie(data))).catch(error => console.log('something went wrong.', error));
};

export const getTrandingFilms = () => (dispatch) => {
  return fetch(`${urlAPI}/movie/popular?${keyAPI}&${lang}`)
    .then((response) => {
      if (response.statusText !== 'OK') {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    }).then(data => dispatch(fetchData(data))).catch(error => console.log('something went wrong.', error));
};

export const getTopRated = () => (dispatch) => {
  return fetch(`${urlAPI}/movie/top_rated?${keyAPI}&${lang}`)
    .then((response) => {
      if (response.statusText !== 'OK') {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    }).then(data => dispatch(fetchData(data))).catch(error => console.log('something went wrong.', error));
};

export const getComingSoonFilms = () => (dispatch) => {
  return fetch(`${urlAPI}/movie/upcoming?${keyAPI}&${lang}`)
    .then((response) => {
      if (response.statusText !== 'OK') {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    }).then(data => dispatch(fetchData(data))).catch(error => console.log('something went wrong.', error));
};

export const getByGenre = ID => (dispatch) => {
  const id = ID;
  console.log('id from getBygenre', id);
  return fetch(`${urlAPI}/discover/movie?${keyAPI}&with_genres=${id}`)
    .then((response) => {
      if (response.statusText !== 'OK') {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    }).then(data => dispatch(fetchData(data))).catch(error => console.log('something went wrong.', error));
};
