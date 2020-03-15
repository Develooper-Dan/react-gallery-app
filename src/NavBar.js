import React from 'react';
import {NavLink} from "react-router-dom"

const NavBar = () =>
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/search/robots'>Robots</NavLink></li>
      <li><NavLink to='/search/people'>People</NavLink></li>
      <li><NavLink to='/search/metalmusic'>Metal</NavLink></li>
    </ul>
  </nav>


export default NavBar
