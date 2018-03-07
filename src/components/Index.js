import React, { Component } from 'react';
import axios from 'axios'; 


class Index extends Component {

render() {

    return (
        <div>

<div className="row">
        <div className="col-sm-8 col-xs-12">
            <div className="panel panel-success">
                <div className="panel-heading"><span className="glyphicon glyphicon-star-empty"></span> Best Product !</div>
                <div className="panel-body">
             
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
               
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>   
                 
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="img/offer1.jpg"/>
                            <div className="carousel-caption">
                              <h3>Salad Burzalenza </h3>
                              <p>Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              </p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="img/offer2.jpg"/>
                            <div className="carousel-caption">
                              <h3>Colleslaw</h3>
                              <p>Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              </p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="img/offer3.jpg"/>
                            <div className="carousel-caption">
                              <h3>Blueberry Waffle</h3>
                              <p>Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              Lorem ipsum dolor sit amet consectetur…
                              </p>
                            </div>
                        </div>
                    </div>
                
                
                </div>
            
                </div>
         
            </div>
        </div>
        <div className="col-sm-4 col-xs-12">
        <div className="panel panel-success">
                <div className="panel-heading"><span className="glyphicon glyphicon-shopping-cart"></span> Cart !</div>
                <div className="panel-body"> 
                    <table className="table">
                        <tr className="success">
                            <th>Barang </th>
                            <th>Jumlah </th>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td><span className="badge badge-success">0</span></td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td><span className="badge badge-success">0</span></td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td><span className="badge badge-success">0</span></td>
                        </tr>
                        <tr>  
                            <td className="success"></td>
                            <td className="success"><span className="label label-success">Rp.- </span></td>
                        </tr>
                    </table>
                    <button type="button" className="btn btn-warning btn-sm" data-toggle="modal" data-target="#myModal"> View Cart </button>
                    <button type="button" className="btn btn-success btn-sm"  >Check Out </button>
                </div>
            </div>
        </div>
    </div>

<div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
         
          <div className="modal-content">
            <div className="modal-header bg-success">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Your Cart Shop !</h4>
            </div>
            <div className="modal-body">          
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Total</th>
            <th>Optional</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salad</td>
            <td>12.000</td>
            <td>1</td>
            <td>
                <a to="#">
                <span className="glyphicon glyphicon-plus-sign"></span>
                </a>
                <a to="#">
                <span className="glyphicon glyphicon-minus-sign"></span>
                </a>
                <a to="#">
                <span className="glyphicon glyphicon-remove-sign"></span>
                </a>
            </td>
          </tr>
          <tr>
            <td>Pizza</td>
            <td>12.000</td>
            <td>1</td>
            <td>
                <a to="#">
                <span className="glyphicon glyphicon-plus-sign"></span>
                </a>
                <a to="#">
                <span className="glyphicon glyphicon-minus-sign"></span>
                </a>
                <a to="#">
                <span className="glyphicon glyphicon-remove-sign"></span>
                </a>
            </td>
          </tr>
          <tr>
             <td>Waffle</td>
            <td>12.000</td>
            <td>1</td>
            <td>
                <a to="#">
                <span className="glyphicon glyphicon-plus-sign"></span>
                </a>
                <a to="#">
                <span className="glyphicon glyphicon-minus-sign"></span>
                </a>
                <a to="#">
                <span className="glyphicon glyphicon-remove-sign"></span>
                </a>
            </td>
          </tr>
          <tr>
             <th>Total</th>
            <th>36.000</th>
            <th>3</th>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
            </div>
            <div className="modal-footer bg-success">
              <button type="button" className="btn btn-warning" data-dismiss="modal">Check Out</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
           
        </div>
      </div>
    
<div className="row">
        <div className="col-sm-12">
        <div className="jumbotron tengah">
                <h1>Get Update !</h1>
                <p className="lead">
                    Dapatkan  pemberitahuan update produk-produk terbaru kami, 
                    dengan berlangganan via email dibawah ini, dan dapatkan diskon menarik lainnya !
                
                </p>
                <form>
                <div className="form-group">
                      <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                      <button type="button" className="btn btn-success btn-lg ">Subscribe </button>
                </div>
                </form>
        </div>
        </div>
    </div>
    </div>
    );
}
}
    export default Index;

