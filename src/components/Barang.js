import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Barang extends Component {
    render () {
        return (
            <div>
<div className="container">
<h1 className="my-4">Page Heading</h1>
<div className="row">

  <div className="col-md-8">
    <img className="img-fluid" src="img/offer1.jpg" alt=""/>
  </div>

  <div className="col-md-4">
    <h3 className="my-3">Description</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. 
        Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
    <h3 className="my-3">Details</h3>
    <ul>
      <li>Lorem Ipsum</li>
      <li>Dolor Sit Amet</li>
      <li>Consectetur</li>
      <li>Adipiscing Elit</li>
    </ul>
  </div>

</div>
</div>
</div>
        );
    }
}
export default Barang;