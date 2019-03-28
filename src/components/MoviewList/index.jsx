import React from 'react';
import './style.scss';
import MovieListItem from '../MovieList__Item/index';


const MoviewList = ({ count }) => {
  console.log('________!!@W!@!', count)
  const listOfMovieItems = new Array(count.length).fill(1).map((item, index) => {
    const a = count[index];
    return <MovieListItem  imageUrl={a}key={index}/>
  })
  console.log('listOfitems______________', listOfMovieItems);
  return (
      <div className="moviewList__container">
        {listOfMovieItems}
      </div>
  )
}

export default MoviewList;
