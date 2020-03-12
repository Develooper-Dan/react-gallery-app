import React from 'react';
import {NavLink} from "react-router-dom"

const NavBar = () =>
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/search/robots'>Robots</NavLink></li>
      <li><NavLink to='/search/space'>Space</NavLink></li>
      <li><NavLink to='/search/metal'>Metal</NavLink></li>
    </ul>
  </nav>


export default NavBar
