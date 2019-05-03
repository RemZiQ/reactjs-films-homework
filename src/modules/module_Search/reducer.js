const initialState = {
  data: {},
  genres: [],
  error: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH__DATA':
      return { ...state, ...{ data: action.payload } };
    case 'FETCH_GENRES':
      return { ...state, ...{ genres: [...action.payload.genres] } };
    case 'FETCH_TRAILER':
      return { ...state, ...{ currentTrailer: action.payload } };
    case 'ERROR_TRAILER':
      return { ...state, ...{ error: true } };
    case 'NO_ERROR_TRAILER':
      return { ...state, ...{ error: false } };
    case 'FETCH__MOVIE':
      return { ...state, ...{ currentMovie: action.payload } };
    default: return state;
  }
}

export default reducer;
