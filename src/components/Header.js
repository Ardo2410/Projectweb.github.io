import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

// import './Header.css';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                 <div className="container">
                   <div className="navbar-header">
                     <button type="button" className="navbar-toggle collapsed navbar-default" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                       <span className="sr-only">Toggle navigation</span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                     </button>
                     <Link to="/index" class="navbar-brand">CUISINE</Link>
                     <Link className="navbar-brand" to='#'><span className="glyphicon glyphicon glyphicon-shopping-cart"></span></Link>
                   </div>
                   <div id="navbar" className="navbar-collapse collapse">
                       <form className="navbar-form navbar-left">
                           <input type="text" className="form-control" placeholder="Search..."/>
                       </form>
                     <ul className="nav navbar-nav navbar-right">
                       <li><Link to="/index">Home</Link></li>
                       <li className="dropdown">
                       <Link to="/product" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Product <span className="caret"></span></Link>
                         <ul className="dropdown-menu" role="menu">
                          <li><Link to='/product' onClick={() => this.props.changeKey('')}>All</Link></li>                         
                           <li><a onClick={() => this.props.changeKey('salad')}>Salad</a></li>
                           <li><a onClick={() => this.props.changeKey('ayam')}>Ayam</a></li>
                           </ul>
                           </li>
                       {/* <li><Link to="/product">Product</Link></li> */}
                       <li><Link to="/about">About</Link></li>
                       <li className="dropdown"> 
                         <Link to="/member" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Member <span className="caret"></span></Link>
                         <ul className="dropdown-menu" role="menu">
                           <li><Link to="#">Login</Link></li>
                           <li><Link to="#">Sign Up</Link></li> 
                          </ul>
                        </li>
                     </ul>
                   </div>
                 </div>
             </nav>
        );
    }
    }
    export default Header;
