import React from 'react';

import './buttonsHover.scss'

const ButtonHover = ({id}) => {
  return (
    <div className='movieList__item_buttons_container' id={`${id}`}>
      <div className='movieList__item__button_watch_container'>
        <button type='button' className='movieList__item__button_watch' id={id}></button>
        <p>Watch now</p>
      </div>
      <button type='button' className='movieList__item__button_view'>View info</button>
    </div>
  )
}

export default ButtonHover;