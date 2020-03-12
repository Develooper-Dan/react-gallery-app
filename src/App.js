import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, useParams} from "react-router-dom";
import NavBar from "./NavBar";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import axios from "axios";
import apiKey from "./data/config";


class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    }
  }

  handleRequest= (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }



  render(){
    return(
    <div className="container">
      <Router>
        <SearchForm handleSearch={this.handleRequest}/>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Gallery />
          </Route>
          <Route path="/search/:query">
            <Gallery photos={this.state.photos} handleSearch={this.handleRequest}/>
          </Route>
          {/* <Route path="*">
            <Error />
          </Route> */}
        </Switch>
      </Router>
    </div>
  )}
}

export default App
