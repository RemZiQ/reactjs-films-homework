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
  }

  handleVisibleButtons = () => {
    const { showTrailer } = this.state;
    if (!showTrailer) {
      this.setState(() => ({
        visibleButtons: true,
      }));
    }
  }

  handleUnvisibleButtons = () => {
    this.setState(() => ({
      visibleButtons: false,
    }));
  }

  handleClickForOverview = () => {
    this.setState(() => ({
      visibleOverview: true,
    }));
  }

  handleCloseOverview = () => {
    this.setState(() => ({
      visibleOverview: false,
    }));
  }

  handleShowTrailer = () => {
    const { showTrailer } = this.state;
    this.setState(() => ({
      showTrailer: !showTrailer,
      visibleButtons: false,
    }));
  }

  handleForFetchTrailer = (e) => {
    const { fetchTrailer } = this.props
    const ID = e.target.id;
    fetchTrailer(ID)
  }

  render() {
    const { visibleButtons, visibleOverview, showTrailer, } = this.state;
    const {
      id,
      title,
      mark,
      genres,
      overview,
      imageUrl,
      trailer,
    } = this.props;
    const style = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${imageUrl})`,
    };
    if (visibleButtons && !visibleOverview) {
      return (
        <div onFocus={this.handleVisibleButtons} onMouseLeave={this.handleUnvisibleButtons} className="movieList__item">
          <div style={style} className="movieList__item_bg" id={`bg${id}`}>
            <ButtonsHover
              state={this.state}
              handleShowTrailer={this.handleShowTrailer}
              fetchTrailer={this.handleForFetchTrailer}
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
          <div style={style} 
          className={visibleOverview ? "movieList__item_bgOverwiew" : "movieList__item_bg"} id={`bg${id}`}>
            <Overview
              handleClose={this.handleCloseOverview}
              title={title}
              mark={mark}
              genres={genres}
              id={id}
              overview={overview}
              handle={this.handleClickForOverview}
              handleForFetchTrailer={this.handleForFetchTrailer}
              handleForOpenModal={this.handleShowTrailer}
            />
          </div>
        </div>
      );
    }  if (showTrailer) {
        return (
          <div onMouseOver={this.handleVisibleButtons} onFocus={this.handleVisibleButtons} className="movieList__item">
            <div style={style} className="movieList__item_bg" id={`bg${id}`}>
              <Trailer >
                <div className="Trailer">
                  <button  onClick={this.handleShowTrailer} id={id} className="movieList__item__trailer_closeButton">
                    <i className="fas fa-times" />
                  </button>
                  <iframe src={trailer} width="640" height="480" frameBorder="0" allowFullScreen></iframe>
                </div>
              </Trailer>
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


const mapStateToProps = state => ({ trailer: state.currentTrailer });

const mapDispatchToProps = dispatch => ({
  fetchTrailer: (id) => {
    dispatch(getTrailer(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);
