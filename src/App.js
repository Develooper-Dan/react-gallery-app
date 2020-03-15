import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Header from "./Header";
import Error from "./Error";
import Gallery from "./Gallery";
import axios from "axios";
import apiKey from "./data/config";


class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false
    }
  }

// This method is used for fetching the image-data from the Flickr-API and then to update the "photos"-state with an array of the received data.
// It gets passed down to the SearchForm and Gallery component. Also toggles the "loading"-state which is used by the Gallery to display a message while the data is fetched.
  handleRequest= (query) => {
    const tags = query.replace(/\s|\+|&/g, ",");
    this.setState({loading: true})
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        })
      })
      .then(() => {
        this.setState({loading: false})
      })
      .catch(error => {
        console.error('Error fetching and parsing data', error);
      });
  }
// The Router uses only 3 different Routes: the main route (which actually redirects to the search route), the search route and an 404-error route
  render(){
    return(
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/search/robots"/>
          </Route>

          <Route path="/search/:query" render= {({match, history}) => (
            <>
              <Header
                routeProps= {history}
                handleRequest={this.handleRequest}
              />
              <Gallery
                routeProps= {match}
                loadingState= {this.state.loading}
                photos={this.state.photos}
                handleSearch={this.handleRequest}
              />
            </>
            )}
          />

          <Route path="*" component= {Error} />
        </Switch>
      </Router>
    </div>
  )}
}

export default App
