import React, { Component } from 'react';

import './buttonsHover.scss';


// class ButtonHover extends Component{
//   constructor(props) {
//     super(props);
//     // this.addClass = this.addClass.bind(this);
//   }
//   // addClass(){
//   //   console.log(this.buttonView);
//   //   this.buttonView.classList.add('movieList__item_bgOverwiew');
//   // }
//   render(){
//     return (
//       <div className='movieList__item_buttons_container' id={`${this.props.id}`}>
//         <div className='movieList__item__button_watch_container'>
//           <button type='button' className='movieList__item__button_watch' id={this.props.id}></button>
//           <p>Watch now</p>
//         </div>
//         <button ref={(button) => {this.buttonView = button}} onClick={this.props.handle}
//          type='button' className='movieList__item__button_view'>View info</button>
//       </div>
//     )
//   }
// }
const ButtonHover = ({
  id, handleOpenOverview, fetchTrailer, handleShowTrailer, state,
}) => (
  <div className="movieList__item_buttons_container" id={`${id}`}>
    <div className="movieList__item__button_watch_container">
      <button
        onClick={fetchTrailer}
        onClick={handleShowTrailer}
        type="button"
        className="movieList__item__button_watch"
        id={id}
      />
      <p>Watch now</p>
    </div>
    <button onClick={handleOpenOverview} type="button" className="movieList__item__button_view">View info</button>
  </div>
);

export default ButtonHover;
