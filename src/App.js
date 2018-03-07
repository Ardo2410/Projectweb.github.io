import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import Index from './components/Index.js';
import Product from './components/Product.js';
import About from './components/About.js';
import Member from './components/Member.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import './App.css';
import axios from 'axios';

import makanan from './makanan.json'

class App extends Component {
  constructor() {
    super ();
    this.state = {key: ''}
  }
  changeKey = key => this.setState({key});

  render () {
    // console.log(makanan)
      return (
        <div>

          <nav className="navbar navbar-default navbar-fixed-top">
          <Header changeKey={this.changeKey.bind(this)}/>
          </nav>
          <div className='row judul-logo'>
                    <div className='col-sm-md-12 text-center'>
                        <img src="img/logo3.png" width="300" height="210" className="img-responsive" />
                    </div>
            </div>
          <div class="container">
          <Route exact path="/" component={Index}/>
            <Route path="/index" component={Index}/>
            <Route path="/product" render={() => {
              let list = makanan.filter(x => (new RegExp(this.state.key, 'gi').test(x.nama))).map((x, i) => <Product nama={x.nama} harga={x.harga} detail={x.detail} urlgambar={x.urlgambar}/>)
              return (
                <div className="tampil">
                  {list}
                </div>
              )
            }}/>
            <Route path="/about" component={About}/>
            <Route path="/member" component={Member}/>
          </div>
          <Footer />
        </div>


      );
    }
  }
export default App;
