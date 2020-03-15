import React from 'react';
import SearchForm from "./SearchForm";
import NavBar from "./NavBar";
// Container for the SearchForm and NavBar
const Header = (props) =>
  <div className="header">
    <h1 className="heading">Just a little gallery app</h1>
    <SearchForm
      routeProps= {props.history}
      handleSearch={props.handleRequest}/>
    <NavBar />
  </div>

  export default Header
