import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { getFilms, getGenres } from '../../modules/module_Search/actions';

import './movieDetailsPageNav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  fetchFilmsAndGenres = (e) => {
    const search = this.input.current.value;
    this.input.current.value = '';
    const { fetchData, fetchGengres, genres } = this.props;
    e.preventDefault();
    if (!genres.length) {
      fetchGengres();
    }
    fetchData(search);
  };

  render() {
    return (
      <nav className="pageHeader__nav">
        <div className="logo">films</div>
        <form method="get" className="nav__form_search">
          <input ref={this.input} type="search" className="nav__search" id="searchInputID" />
          <button onClick={this.fetchFilmsAndGenres} type="submit" className="nav__search_button" />
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
