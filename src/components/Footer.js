import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
// import './Footer.css';

class Footer extends Component {
    render(){
        return (
    
    <div className="row">
            <div className="col-sm-3 col-xs-6">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">About Us</h3>
                  </div>
                  <div className="panel-body">
                    <ul>
                        <li><i className="fa fa-building" aria-hidden="true"></i> &nbsp;PT.Cuizine </li>
                        <li><i className="fa fa-location-arrow" aria-hidden="true"></i>&nbsp; Jl.GR 20 no 39 Bintaro</li>
                        <li><i className="fa fa-phone" aria-hidden="true"></i>&nbsp; 0123456789</li>
                        <li><i className="fa fa-facebook" aria-hidden="true"></i>&nbs; phealthycuizine</li>
                        <li><i className="fa fa-twitter" aria-hidden="true"></i>&nbsp; @healthycuizine </li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="col-sm-3 col-xs-6">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">Our Partner !</h3>
                  </div>
                  <div className="panel-body">
                    <ul>
                        <li><span className="glyphicon glyphicon-asterisk"></span>&nbspPT.indo </li>
                        <li><span className="glyphicon glyphicon-qrcode"></span>&nbspInsurance life </li>
                        <li><span className="glyphicon glyphicon-refresh"></span>&nbspMall Senayan City </li>
                        <li><span className="glyphicon glyphicon-leaf"></span>&nbspPT.unilever</li>
                        <li><span className="glyphicon glyphicon-fire"></span>&nbspKesehatan jasmani</li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="col-sm-3 col-xs-6">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">Help Desk</h3>
                  </div>
                  <div className="panel-body">
                    <ul> 
                        <li><span className="glyphicon glyphicon-comment"></span><Link to="#" > Need help ?</Link></li>
                        <li><span className="glyphicon glyphicon-comment"></span><Link to="#" > Need help ?</Link></li>
                        <li><span className="glyphicon glyphicon-comment"></span><Link to="#" > Need help ?</Link></li>
                        <li><span className="glyphicon glyphicon-comment"></span><Link to="#" > Need help ?</Link></li>
                        <li><span className="glyphicon glyphicon-comment"></span><Link to="#" > Need help ?</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="col-sm-3 col-xs-6">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">Report a bug</h3>
                  </div>
                  <div className="panel-body">
                    <ul>
                        <li><Link to="#" > Found a bug ? </Link></li>
                        <li><Link to="#" > Report to us </Link></li>
                        <li><Link to="#" > Send email </Link></li>
                        <li><Link to="#" > Cuizine@email.com </Link></li>
                        <li><Link to="#" > Support@Cuizine.com </Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="row">
                    <div className="col-sm-10">
                        <img src="img/paypal.png" className="img-responsive" width="200" height="200"/>
                    </div>
                </div>
    </div> 
   );
}
}
export default Footer;

