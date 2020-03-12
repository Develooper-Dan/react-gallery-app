import React, { Component } from 'react';
import NoResults from "./NoResults"
import {useParams} from "react-router-dom";

class Gallery extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     photos: []
  //   }
  // }
componentDidMount(){
this.props.handleSearch(this.props.params);
}

render(){
  console.log(this.props.params)
return(
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <li>
            <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
          </li>
        </ul>
        <NoResults />
      </div>
)}
}

export default Gallery
