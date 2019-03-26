import React from 'react';
import './style.scss';


class Nav extends React.Component{
  handler(e){
    e.preventDefault();
    console.log('11111');
  }
  render(){
  return (
    <nav className="pageHeader__nav">
      <div className="logo">films</div>
      <form action="" method="get" className="nav__form_search">
        <input type="search" className="nav__search"></input>
        <button onClick={(e) => this.handler(e)} type="submit" className="nav__search_button"></button>
      </form>
    </nav>
  )
  }
}

export default Nav;