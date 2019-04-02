import React from 'react';

import store from '../../modules/store';
import './style.scss';

const MovieListItem = ({imageUrl, title, genres, mark}) => {
  const hover = () => {
    console.log('hover');
  }
  const style = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${imageUrl})`
  }
  const mapGenres = store.getState().genres;
  let listOfGenres = '';
  if(store.getState().genres.length){
    listOfGenres = genres.map(item => {
      return (
        <li key={item}>{mapGenres.filter(elem => elem.id === item)[0].name}</li>
      )
    })
  }
  console.log(listOfGenres);
  return (
    <div className='movieList__item'>
      <div onMouseOver={hover} style={style} className='movieList__item_bg' id></div>
      <h2 className='movieList__item_title'>{title}</h2>
      <div className='movieList__item_mark'>{mark}</div>
      <ul className='movieList__item_genresList'>{listOfGenres}</ul>
    </div>
  )
}

export default MovieListItem;