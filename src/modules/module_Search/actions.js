export const fetchData = data => ({ type: 'FETCH__DATA', payload: data });

export const fetchGenres = genres => ({ type: 'FETCH_GENRES', payload: genres });
export const fetchTrailer = url => ({ type: 'FETCH_TRAILER', payload: url });

const urlAPI = 'https://api.themoviedb.org/3';
const keyAPI = 'api_key=549663e4fb316b398fa37766692d00b7';

export const getFilms = () => (dispatch) => {
  const search = document.getElementById('searchInputID').value;
  document.getElementById('searchInputID').value = '';
  fetch(`${urlAPI}/search/movie?${keyAPI}&language=en-US&query=${search}&page=1&include_adult=false`)
    .then(response => response.json()).then(data => dispatch(fetchData(data)));
};

export const getGenres = () => (dispatch) => {
  fetch(`${urlAPI}/genre/movie/list?${keyAPI}&language=en-US`)
    .then(response => response.json()).then(data => dispatch(fetchGenres(data)));
};

export const getTrailer = (e) => {
  const { id } = e.target;
  return (dispatch) => {
    fetch(`${urlAPI}/movie/${id}/videos?${keyAPI}`)
      .then(response => response.json()).then((data) => {
        if (data.results.length) {
          return dispatch(fetchTrailer(`https://www.youtube.com/embed/${data.results[0].key}`));
        }
        return null;
      });
  };
};
