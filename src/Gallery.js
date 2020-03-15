import React, { Component } from 'react';
import NoResults from "./NoResults"
import Image from "./Image"
// Main component. Does the API-fetch calls when mounted or on update if the user makes a new request via search or links.
class Gallery extends Component {

componentDidMount(){
  this.props.handleSearch(this.props.routeProps.params.query)
}

componentDidUpdate(prevProps){
  if(this.props.routeProps.params.query !== prevProps.routeProps.params.query)
  this.props.handleSearch(this.props.routeProps.params.query)
}

createGallery(photos){
  return photos.map(photo =>
    <Image key= {photo.id} params= {photo}/>
  )
}
// Creates the image components using the received photo-data. While the data is fetched, a "loading"-message is shown.
// Renders the "No Results" component if the request didn't return anything.
render(){
    const photos = this.props.photos;
    if(this.props.loadingState){
      return <h2>Loading...</h2>
    }
    if(photos.length === 0){
      return <NoResults />
    }
return(
      <div className="photo-container">
        <h2>Results for {this.props.routeProps.params.query}</h2>
        <ul>
          {this.createGallery(photos)}
        </ul>
      </div>
    )}
}

export default Gallery
