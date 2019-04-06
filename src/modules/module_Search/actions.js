export const fetchData = (data) => {
  return {type: 'FETCH__DATA', data}
}

export const fetchGenres = (genres) => {
  return {type: 'FETCH_GENRES', genres}
}
export const fetchTrailer = (url) => {
  return {type: 'FETCH_TRAILER', url}
}

export const getFilms = () => {
  return dispatch => {
    const search = document.getElementById('searchInputID').value;
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

export const getTrailer = (e) => {
  const id =  e.target.id;
  return dispatch => {
  fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=549663e4fb316b398fa37766692d00b7`)
    .then(response => response.json()).then(data => {
      return dispatch(fetchTrailer(`https://www.youtube.com/embed/${data.results[0].key}`));
    });
  }
}