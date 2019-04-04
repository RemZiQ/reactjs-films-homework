import React, { Component} from 'react';
import { connect } from 'react-redux';

import MainInfo from '../MovieList__Item/MovieListItemMainInfo/MovieListItemMainInfo';
import ButtonsHover from './ButtonsHover/ButtonHover';
import store from '../../modules/store';
import {getTrailer} from '../../modules/module_Search/actions';
import Trailer from '../MovieList__Item_Trailer/index';
import './movieListItem.scss';


class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {visibleText: false, visibleButtons: false};
    // this.handleClickForText = this.handleClickForText.bind(this);
    this.handleVisibleButtons = this.handleVisibleButtons.bind(this);
  }
  handleVisibleButtons(){
    this.setState(state => ({
      visibleButtons: !state.visibleButtons
    }));
    this.state.visibleButtons ? console.log('1'): console.log('1111');
  }
  render (){
    const  style = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.imageUrl})`
    }
    if(this.state.visibleButtons){
      return (
        <div onMouseOver={this.handleVisibleButtons} onMouseLeave={this.handleVisibleButtons} className='movieList__item'>
          <div style={style} className='movieList__item_bg' id={`bg${this.props.id}`}>
            <ButtonsHover id={this.props.id}/>
          </div>
          <MainInfo title={this.props.title} mark={this.props.mark} genres={this.props.genres}></MainInfo>
        </div>
      )
    } else {
      return (
        <div onMouseOver={this.handleVisibleButtons} className='movieList__item'>
          <div style={style} className='movieList__item_bg' id={`bg${this.props.id}`}></div>
          <MainInfo title={this.props.title} mark={this.props.mark} genres={this.props.genres}></MainInfo>
        </div>
      )
    }

 
  }
}

export default MovieListItem;
