const initialState = {
  data: {},
  genres: []
}

function reducer(state=initialState, action){
  switch(action.type){
    case "FETCH__DATA":
      return Object.assign({}, state, {data: action.data});
    case "FETCH_GENRES":
      return Object.assign({}, state,  {genres: [...action.genres.genres]});
    case 'FETCH_TRAILER':
      return Object.assign({}, state,  {currentTrailer: action.url});
    default: return state;
  }
}

export default reducer;