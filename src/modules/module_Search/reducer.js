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
    default: return state;
  }
}

export default reducer;