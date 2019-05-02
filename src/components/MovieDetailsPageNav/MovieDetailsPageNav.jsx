import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './movieDetailsPageNav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  fetchFilmsAndGenres = () => {
    const { searchValue } = this.state;
    this.setState({ searchValue: '' });
    const { getFilms, getGenres, genres } = this.props;
    // dont use preventDefault when use REACT ROUTE <LINK> !!!!!
    // e.preventDefault();
    if (!genres.length) {
      getGenres();
    }
    getFilms(searchValue);
  };

  handleChangeInput = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <nav className="pageHeader__nav">
        <div className="logo">films</div>
        <form method="get" className="nav__form_search">
          <input
            type="search"
            className="nav__search"
            id="searchInputID"
            value={searchValue}
            onChange={this.handleChangeInput}
          />
          <Link to={{ pathname: '/search', search: `?query=${searchValue}` }}>
            <button onClick={this.fetchFilmsAndGenres} type="submit" className="nav__search_button" />
          </Link>
        </form>
      </nav>
    );
  }
}

Nav.propTypes = {
  getFilms: propTypes.func,
  getGenres: propTypes.func,
  genres: propTypes.arrayOf(propTypes.object),
};

Nav.defaultProps = {
  getFilms: null,
  getGenres: null,
  genres: null,
};

export default Nav;
