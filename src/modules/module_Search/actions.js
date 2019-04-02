export const fetchData = (data) => {
  return {type: 'FETCH__DATA', data}
}

export const fetchGenres = (genres) => {
  return {type: 'FETCH_GENRES', genres}
}

export const getFilms = () => {
  return dispatch => {
    console.log('searching');
    const search = document.getElementById('searchInputID').value;
    console.log('______________search', search);
    document.getElementById('searchInputID').value='';
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=549663e4fb316b398fa37766692d00b7&language=en-US&query=${search}&page=1&include_adult=false`)
      .then(response => response.json()).then(data => dispatch(fetchData(data)));
  }
}

export const getGenres = () => {
  return dispatch => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=549663e4fb316b398fa37766692d00b7&language=en-US')
      .then(response => response.json()).then(data => dispatch(fetchGenres(data)));
  }
}