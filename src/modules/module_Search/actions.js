export const fetchData = data => ({ type: 'FETCH__DATA', payload: data });

export const fetchGenres = genres => ({ type: 'FETCH_GENRES', payload: genres });

export const fetchTrailer = url => ({ type: 'FETCH_TRAILER', payload: url });

export const errorTrailer = () => ({ type: 'ERROR_TRAILER' });

export const noError = () => ({ type: 'NO_ERROR_TRAILER' });

const urlAPI = 'https://api.themoviedb.org/3';
const keyAPI = 'api_key=549663e4fb316b398fa37766692d00b7';

export const getFilms = search => (dispatch) => {
  fetch(`${urlAPI}/search/movie?${keyAPI}&language=en-US&query=${search}&page=1&include_adult=false`)
    .then((response) => {
      if (response.statusText !== 'OK') {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    }).then(data => dispatch(fetchData(data))).catch(error => console.log('something went wrong.', error));
};

export const getGenres = () => (dispatch) => {
  fetch(`${urlAPI}/genre/movie/list?${keyAPI}&language=en-US`)
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
    fetch(`${urlAPI}/movie/${id}/videos?${keyAPI}`)
      .then((response) => {
        if (response.statusText !== 'OK') {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      }).then((data) => {
        if (data.results.length) {
          dispatch(noError());
          return dispatch(fetchTrailer(`https://www.youtube.com/embed/${data.results[0].key}`));
        }
        return dispatch(errorTrailer());
      }).catch(error => console.log('something went wrong.', error));
  };
};
