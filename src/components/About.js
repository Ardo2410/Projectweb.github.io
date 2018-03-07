import React, { Component } from 'react';
import axios from 'axios'; 

class About extends Component {
    render() {
        return (
            <div>
    <h1><center>Testimonial</center></h1>
    <div className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol> 
                            <div className="carousel-inner">
                                <div className="item active text-center">
                                    <img src="img/face3.jpg" className="center-block"  width="120" height="210"/>
                                    <h2>Kendall Jenner</h2>
                                    <h5>Model <span>Victoria Secret</span></h5>
                                    <p>
                                       Always trying to eat better food and nice food. and this is the best food that i've tried. keeps me healthy and also
                                       stay strong. it helps me a lot! Thanks!!
                                    </p>
                                </div>
                                <div className="item text-center">
                                        <img src="img/face2.jpg" className="center-block"  width="120" height="210"/>
                                        <h2>Selena Gomez</h2>
                                        <h5>Singer</h5>
                                        <p>
                                           Always trying to eat better food and nice food. and this is the best food that i've tried. keeps me healthy and also
                                           stay strong. it helps me a lot! Thanks!!
                                        </p>
                                    </div>
                                    <div className="item text-center">
                                            <img src="img/face1.jpg" className="center-block"  width="120" height="210"/>
                                            <h2>Daniel Drugger</h2>
                                            <h5>Supervisor <span>Insurance Company</span></h5>
                                            <p>
                                               Always trying to eat better food and nice food. and this is the best food that i've tried. keeps me healthy and also
                                               stay strong. it helps me a lot! Thanks!!
                                            </p>
                                        </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="services">
        <div class="container">
            <h2 class="text-center text-uppercase">Our Services</h2>
        </div>
        <p class="text-center">
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ea voluptates mollitia? Ad quis alias harum in aut 
     voluptatem vero quae ut odit perferendis, unde, repellat quibusdam iure necessitatibus deserunt!
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ea voluptates mollitia? Ad quis alias harum in aut 
     voluptatem vero quae ut odit perferendis, unde, repellat quibusdam iure necessitatibus deserunt!
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ea voluptates mollitia? Ad quis alias harum in aut 
     voluptatem vero quae ut odit perferendis, unde, repellat quibusdam iure necessitatibus deserunt!
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ea voluptates mollitia? Ad quis alias harum in aut 
     voluptatem vero quae ut odit perferendis, unde, repellat quibusdam iure necessitatibus deserunt!
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ea voluptates mollitia? Ad quis alias harum in aut 
     voluptatem vero quae ut odit perferendis, unde, repellat quibusdam iure necessitatibus deserunt!</p>
    </div>
        </div>
        );
    }
}
export default About;
