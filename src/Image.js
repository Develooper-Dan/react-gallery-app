import React from 'react';


const Image = (props) =>
<li>
  <img src={`https://farm${props.params.farm}.staticflickr.com/${props.params.server}/${props.params.id}_${props.params.secret}.jpg`} alt="" />
</li>

export default Image
