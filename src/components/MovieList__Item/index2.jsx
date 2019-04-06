import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainInfo from './MovieListItemMainInfo/MovieListItemMainInfo';
import ButtonsHover from './ButtonsHover/ButtonHover';
import Overview from './Overwiew/Overview';
import Trailer from './Trailer/Trailer';
import store from '../../modules/store';
import { getTrailer } from '../../modules/module_Search/actions';
import './movieListItem.scss';


class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { visibleOverview: false, visibleButtons: false, showTrailer: false };
    this.handleClickForOverview = this.handleClickForOverview.bind(this);
    this.handleVisibleButtons = this.handleVisibleButtons.bind(this);
    this.handleUnvisibleButtons = this.handleUnvisibleButtons.bind(this);
    this.handleCloseOverview = this.handleCloseOverview.bind(this);
    this.handleShowTrailer = this.handleShowTrailer.bind(this);
  }

  handleVisibleButtons(e) {
    if (!this.state.showTrailer) {
      this.setState(state => ({
        visibleButtons: true,
      }));
    }
  }

  handleUnvisibleButtons(e) {
    this.setState(state => ({
      visibleButtons: false,
    }));
  }

  handleClickForOverview() {
    this.setState(state => ({
      visibleOverview: true,
    }));
    this.itemBG.classList.add('movieList__item_bgOverwiew');
  }

  handleCloseOverview() {
    this.setState(state => ({
      visibleOverview: false,
    }));
    this.itemBG2.classList.remove('movieList__item_bgOverwiew');
  }

  handleShowTrailer() {
    this.setState(state => ({
      showTrailer: !this.state.showTrailer,
    }));
    this.setState(state => ({
      visibleButtons: false,
    }));
  }

  render() {
    const style = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.imageUrl})`,
    };
    if (this.state.visibleButtons && !this.state.visibleOverview) {
      return (
        <div onMouseOver={this.handleVisibleButtons} onMouseLeave={this.handleUnvisibleButtons} className="movieList__item">
          <div ref={(div) => { this.itemBG = div; }} style={style} className="movieList__item_bg" id={`bg${this.props.id}`}>
            <ButtonsHover
              state={this.state}
              handleShowTrailer={this.handleShowTrailer}
              fetchTrailer={this.props.fetchTrailer}
              handleOpenOverview={this.handleClickForOverview}
              id={this.props.id}
            />
          </div>
          <MainInfo title={this.props.title} mark={this.props.mark} genres={this.props.genres} />
        </div>
      );
    } if (this.state.visibleOverview) {
      return (
        <div onMouseOver={this.handleVisibleButtons} onMouseLeave={this.handleUnvisibleButtons} className="movieList__item">
          <div ref={(div) => { this.itemBG2 = div; }} style={style} className="movieList__item_bg" id={`bg${this.props.id}`}>
            <Overview
              handleClose={this.handleCloseOverview}
              title={this.props.title}
              mark={this.props.mark}
              genres={this.props.genres}
              id={this.props.id}
              overview={this.props.overview}
              handle={this.handleClickForOverview}
            />
          </div>
        </div>
      );
    } if (this.state.showTrailer) {
      return (
        <div onMouseOver={this.handleVisibleButtons} className="movieList__item">
          <div style={style} className="movieList__item_bg" id={`bg${this.props.id}`}>
            <Trailer handle={this.handleShowTrailer} />
          </div>
          <MainInfo title={this.props.title} mark={this.props.mark} genres={this.props.genres} />
        </div>
      );
    }
    return (
      <div onMouseOver={this.handleVisibleButtons} className="movieList__item">
        <div style={style} className="movieList__item_bg" id={`bg${this.props.id}`} />
        <MainInfo title={this.props.title} mark={this.props.mark} genres={this.props.genres} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTrailer: (e) => {
    e.preventDefault();
    dispatch(getTrailer(e));
  },
});

export default connect(null, mapDispatchToProps)(MovieListItem);
