import React, { Component } from 'react';
import NoResults from "./NoResults"
import Image from "./Image"

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

render(){
    const photos = this.props.photos;
    if(photos.length === 0){
      return <h2>Loading...</h2>
    }
console.log(this.props.routeProps.params.query)
return(
      <div className="photo-container">
        <h2>Results for {this.props.routeProps.params.query}</h2>
        <ul>
          {this.createGallery(this.props.photos)}
        </ul>
        <NoResults />
      </div>
    )}
}

export default Gallery
