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
    const { fetchData, fetchGengres, genres } = this.props;
    // dont use preventDefault when use REACT ROUTE <LINK> !!!!!
    // e.preventDefault();
    if (!genres.length) {
      fetchGengres();
    }
    fetchData(searchValue);
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
  fetchData: propTypes.func,
  fetchGengres: propTypes.func,
  genres: propTypes.arrayOf(propTypes.object),
};

Nav.defaultProps = {
  fetchData: null,
  fetchGengres: null,
  genres: null,
};

export default Nav;
