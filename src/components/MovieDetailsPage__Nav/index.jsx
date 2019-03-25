import React from 'react';
import './style.scss';


class Nav extends React.Component{
  render(){
  return (
    <nav className="pageHeader__nav">
      <div classNAme="Logo">FILMS</div>
      <input type="search"></input>
    </nav>
  )
  }
}

export default Nav;