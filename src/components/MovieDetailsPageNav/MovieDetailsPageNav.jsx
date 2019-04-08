import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { getFilms, getGenres } from '../../modules/module_Search/actions';
import store from '../../modules/store';

import './movieDetailsPageNav.scss';


const Nav = ({ fetchData }) => (
  <nav className="pageHeader__nav">
    <div className="logo">films</div>
    <form method="get" className="nav__form_search">
      <input type="search" className="nav__search" id="searchInputID" />
      <button onClick={fetchData} type="submit" className="nav__search_button" />
    </form>
  </nav>
);


Nav.propTypes = {
  fetchData: propTypes.func.isRequired,
};

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({
  fetchData: (e) => {
    e.preventDefault();
    dispatch(getFilms());

    if (!store.getState().genres.length) {
      dispatch(getGenres());
    }
  },
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Nav);
