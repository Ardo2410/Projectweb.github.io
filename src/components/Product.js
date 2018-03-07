import React, { Component } from 'react';
import axios from 'axios'; 

// import './Rumus.js';

class Product extends Component {
    render () {
        return (
        <div>    
            <div className="row">	
                <div>	
                    <div  id="hover-cap-4col">
                    <div className="thumbnail">
                        <div className="caption">
                            <h4>{this.props.nama}</h4>
                            <p>{this.props.detail}</p>
                            <p>{this.props.harga} 
                            <button type="button" className="btn btn-warning btn-sm notif">Beli</button>
                            <button type="button" className="btn  btn-success btn-sm">Detail</button>
                            </p>
                        
                        </div>
                        <img src={this.props.urlgambar} className='img-responsive'/>
                    </div>
                    </div>
                </div>
            </div>    
        </div>
        );
    }
}
export default Product;