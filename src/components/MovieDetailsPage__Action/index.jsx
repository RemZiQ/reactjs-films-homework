import React from 'react';
import './style.scss';

const Action = ({info}) => {
  return (
    <div className='action_container'>
       <div className='action_info'>{info}</div>
      <div className='action__buttons_container'>
        <button className='action__watch'>Watch now</button>
        <button className='action__view'>View info</button>
      </div>
    </div>
  )
}
export default Action;