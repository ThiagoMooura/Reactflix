import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './header.css'

class Header extends Component{
  render(){
    return(
      <header className="app">
        <Link to='/'>Reactflix</Link>
      </header>
    );
  }
}

export default Header