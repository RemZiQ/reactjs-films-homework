import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import MainInfo from './MainInfo';
import ButtonsHover from './ButtonsHover';
import Overview from './Overwiew';
import Trailer from './Trailer';
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

  handleVisibleButtons() {
    const { showTrailer } = this.state;
    if (!showTrailer) {
      this.setState(() => ({
        visibleButtons: true,
      }));
    }
  }

  handleUnvisibleButtons() {
    this.setState(() => ({
      visibleButtons: false,
    }));
  }

  handleClickForOverview() {
    this.setState(() => ({
      visibleOverview: true,
    }));
    this.itemBG.classList.add('movieList__item_bgOverwiew');
  }

  handleCloseOverview() {
    this.setState(() => ({
      visibleOverview: false,
    }));
    this.itemBG2.classList.remove('movieList__item_bgOverwiew');
  }

  handleShowTrailer() {
    const { showTrailer } = this.state;
    this.setState(() => ({
      showTrailer: !showTrailer,
    }));
    this.setState(() => ({
      visibleButtons: false,
    }));
  }

  render() {
    const { visibleButtons, visibleOverview, showTrailer } = this.state;
    const {
      fetchTrailer,
      id,
      title,
      mark,
      genres,
      overview,
      imageUrl,
    } = this.props;
    const style = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${imageUrl})`,
    };
    if (visibleButtons && !visibleOverview && !showTrailer) {
      return (
        <div onFocus={this.handleVisibleButtons} onMouseLeave={this.handleUnvisibleButtons} className="movieList__item">
          <div ref={(div) => { this.itemBG = div; }} style={style} className="movieList__item_bg" id={`bg${id}`}>
            <ButtonsHover
              state={this.state}
              handleShowTrailer={this.handleShowTrailer}
              fetchTrailer={fetchTrailer}
              handleOpenOverview={this.handleClickForOverview}
              id={id}
            />
          </div>
          <MainInfo title={title} mark={mark} genres={genres} />
        </div>
      );
    } if (visibleOverview) {
      return (
        <div onFocus={this.handleVisibleButtons} onMouseLeave={this.handleUnvisibleButtons} className="movieList__item">
          <div ref={(div) => { this.itemBG2 = div; }} style={style} className="movieList__item_bg" id={`bg${id}`}>
            <Overview
              handleClose={this.handleCloseOverview}
              title={title}
              mark={mark}
              genres={genres}
              id={id}
              overview={overview}
              handle={this.handleClickForOverview}
              handleForFetchTrailer={fetchTrailer}
              handleForOpenModal={this.handleShowTrailer}
            />
          </div>
        </div>
      );
    } if (showTrailer) {
      return (
        <div onMouseOver={this.handleVisibleButtons} onFocus={this.handleVisibleButtons} className="movieList__item">
          <div style={style} className="movieList__item_bg" id={`bg${id}`}>
            <Trailer handle={this.handleShowTrailer} id={id} />
          </div>
          <MainInfo title={title} mark={mark} genres={genres} />
        </div>
      );
    }
    return (
      <div onMouseOver={this.handleVisibleButtons} onFocus={this.handleVisibleButtons} className="movieList__item">
        <div style={style} className="movieList__item_bg" id={`bg${id}`} />
        <MainInfo title={title} mark={mark} genres={genres} />
      </div>
    );
  }
}


MovieListItem.propTypes = {
  fetchTrailer: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
  title: propTypes.string,
  mark: propTypes.number,
  genres: propTypes.arrayOf(propTypes.number).isRequired,
  overview: propTypes.string,
  imageUrl: propTypes.string.isRequired,
};

MovieListItem.defaultProps = {
  title: 'Sorry here is no title',
  mark: 1,
  overview: 'Sorry here is no info',
};

const mapDispatchToProps = dispatch => ({
  fetchTrailer: (e) => {
    e.preventDefault();
    dispatch(getTrailer(e));
  },
});

export default connect(null, mapDispatchToProps)(MovieListItem);
