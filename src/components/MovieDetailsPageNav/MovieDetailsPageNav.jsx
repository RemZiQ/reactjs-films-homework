import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getFilms, getGenres } from '../../modules/module_Search/actions';

import './movieDetailsPageNav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  fetchFilmsAndGenres = (e) => {
    const search = this.state.searchValue;
    this.setState({ searchValue: '' });
    const { fetchData, fetchGengres, genres } = this.props;
    // dont use preventDefault when use REACT ROUTE <LINK> !!!!!
    // e.preventDefault();
    if (!genres.length) {
      fetchGengres();
    }
    fetchData(search);
  };

  // submitForm = () => {
  //   this.setState
  // }

  handleChangeInput = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  }
  render() {
    return (
      <nav className="pageHeader__nav">
        <div className="logo">films</div>
        <form onSubmit={console.log('*****')} method="get" className="nav__form_search">
          <input 
            type="search" 
            className="nav__search" 
            id="searchInputID" 
            value={this.state.searchValue}
            onChange={this.handleChangeInput}
            />
          <Link to={{pathname:'/', search:`?query=${this.state.searchValue}`}}>
          {console.log("____", this.state.searchValue)}
          <button onClick={this.fetchFilmsAndGenres} type="submit" className="nav__search_button" />
          </Link>
        </form>
      </nav>
    );
  }
}

Nav.propTypes = {
  fetchData: propTypes.func.isRequired,
  fetchGengres: propTypes.func.isRequired,
  genres: propTypes.arrayOf(propTypes.object).isRequired,
};

const mapStateToProps = store => ({ genres: store.genres });
const mapDispatchToProps = dispatch => ({
  fetchData: (search) => {
    dispatch(getFilms(search));
  },
  fetchGengres: () => {
    dispatch(getGenres());
  },
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Nav);
