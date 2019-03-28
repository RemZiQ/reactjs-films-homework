import React from 'react';
import './style.scss';

const MovieListItem = ({imageUrl}) => {
  const style = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${imageUrl})`
  }
  console.log(style);
  return (
    <div style={style} className='movieList__item'></div>
  )
}

export default MovieListItem;