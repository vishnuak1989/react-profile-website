import React from 'react';
import {NavLink } from 'react-router-dom';
import Sidebar from './sidebar.js';


const Header=()=>(
    <div>
  <header>
        <NavLink to="/" activeClassName="selected" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="selected" exact={true}>Work</NavLink>
        <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
  </header>
  <Sidebar />
  </div>
)
export default Header;
