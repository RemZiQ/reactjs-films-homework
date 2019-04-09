import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { getFilms, getGenres } from '../../modules/module_Search/actions';

import './movieDetailsPageNav.scss';


const Nav = ({ fetchData, fetchGengres, genres }) => {
  const fetchFilmsAndGenres = (e) => {
    e.preventDefault();
    if (!genres.length) {
      fetchGengres();
    }
    fetchData();
  };
  return (
    <nav className="pageHeader__nav">
      <div className="logo">films</div>
      <form method="get" className="nav__form_search">
        <input type="search" className="nav__search" id="searchInputID" />
        <button onClick={fetchFilmsAndGenres} type="submit" className="nav__search_button" />
      </form>
    </nav>
  );
};


Nav.propTypes = {
  fetchData: propTypes.func.isRequired,
  fetchGengres: propTypes.func.isRequired,
  genres: propTypes.arrayOf(propTypes.object).isRequired,
};

const mapStateToProps = store => ({ genres: store.genres });
const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(getFilms());
  },
  fetchGengres: () => {
    dispatch(getGenres());
  },
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Nav);
