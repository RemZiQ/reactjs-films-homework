import React from 'react';
import { connect } from 'react-redux';

import { getFilms, getGenres } from '../../modules/module_Search/actions';
import store from '../../modules/store';

import './style.scss';



const Nav = ({fetchData, store}) => {
  // handler(e) {
  //   e.preventDefault();
  //   console.log(this.props.onSearch);
  // }

  // render() {
    return (
      <nav className="pageHeader__nav">
        <div className="logo">films</div>
        <form action="" method="get" className="nav__form_search">
          <input type="search" className="nav__search" id="searchInputID" />
          <button onClick={fetchData} type="submit" className="nav__search_button" />
        </form>
      </nav>
    );
  }
// }

const mapStateToProps = (state) => {
  return {store: state}
}
const mapDispatchToProps = dispatch => {
  return  {
    fetchData: (e) => {
      e.preventDefault();
      dispatch(getFilms());
      
      if(!store.getState().genres.length){
        dispatch(getGenres());
      }
    },
  }
}

export default connect(
mapStateToProps, mapDispatchToProps
)(Nav);
