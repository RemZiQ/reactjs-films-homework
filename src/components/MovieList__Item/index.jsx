import React from 'react';
import { connect } from 'react-redux';

import store from '../../modules/store';
import {getTrailer} from '../../modules/module_Search/actions';
import Trailer from '../MovieList__Item_Trailer/index';
import './style.scss';

const MovieListItem = ({imageUrl, title, genres, mark, id, overview, fetchTrailer}) => {
  const addClass = () => {
    const elem = document.getElementById(`${id}`);  
    elem.classList.add('movieList__item_buttons_container_show');
  }
  const removeClass = () => {
    const elem = document.getElementById(`${id}`);  
    elem.classList.remove('movieList__item_buttons_container_show');
  }
  const showOverview = (e) => {
    e.preventDefault();
    const elem = document.getElementById(`overview${id}`);  
    elem.classList.add('movieList__item__overviewShow');
    const hoverElem = document.getElementById(`${id}`);  
    hoverElem.classList.add('movieList__item_buttons_container_hideWithButton');
    const bg = document.getElementById(`bg${id}`);
    bg.classList.add('movieList__item_bg_overview');
    const mainInfo = document.getElementById(`mainInfo${id}`);
    mainInfo.classList.add('movieList__item__mainInfoHide');
  }
  const hideOverview = (e) => {
    e.preventDefault();
    const elem = document.getElementById(`overview${id}`);  
    elem.classList.remove('movieList__item__overviewShow');
    const mainInfo = document.getElementById(`mainInfo${id}`);
    const hoverElem = document.getElementById(`${id}`);  
    hoverElem.classList.remove('movieList__item_buttons_container_hideWithButton');
    mainInfo.classList.remove('movieList__item__mainInfoHide');
    const bg = document.getElementById(`bg${id}`);
    bg.classList.remove('movieList__item_bg_overview');
  }
  const hideTrailer =  () => {
    const elem = document.getElementById(`trailerContainer${id}`);
    elem.classList.remove('movieList__item__trailerContainerShow');
    // const frame =document.getElementsByName('trailer');
    // frame.innerHTML = '';
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
      <div onMouseOver={addClass} onMouseOut={removeClass} style={style} className='movieList__item_bg' id={`bg${id}`}>
      <Trailer id={id}></Trailer>
        <div className='movieList__item_buttons_container' id={`${id}`}>
          <div className='movieList__item__button_watch_container'>
              <button onClick={fetchTrailer} type='button' className='movieList__item__button_watch' id={id}></button>
              <p>Watch now</p>
            </div>
            <button onClick={showOverview} type='button' className='movieList__item__button_view'>View info</button>
        </div>
        <div className='movieList__item__overview' id={`overview${id}`}>
          <button onClick={hideOverview} type='submit' className='movieList__item__closeOverview' id={`closeOverview${id}`}>
          <i class="fas fa-times"></i>
          </button>
          <div className='movieList__item__overview__mainInfo'>
            <h2 className='movieList__item_title'>{title}</h2>
            <div className='movieList__item_mark'>{mark}</div>
            <ul className='movieList__item_genresList'>{listOfGenres}</ul>
          </div>
          <div className='movieList__item__overviewDetails'>{overview}</div>
          <button onClick={fetchTrailer} type="button" className="action__watch overview__watch">Watch now</button>
        </div>
      </div>
      <div className='movieList__item__mainInfo' id={`mainInfo${id}`}>
        <h2 className='movieList__item_title'>{title}</h2>
        <div className='movieList__item_mark'>{mark}</div>
        <ul className='movieList__item_genresList'>{listOfGenres}</ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {store: state}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTrailer: (e) => {
      e.preventDefault();
      dispatch(getTrailer(e));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);