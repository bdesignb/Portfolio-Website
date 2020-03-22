import React, { Component } from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Typer from './Typer';
import Nav from './Nav';


class Header extends Component {

    render() {
        return (
            <div>
                <Nav />
                <div className="header" id='home'>
                    <div className="overlay">
                        <div className="header-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-left">
                                        <h4><span>graphic design. </span><span>web design. </span><span> development.</span></h4>
                                        <h2>I AM
                                            <span>
                                                <Typer dataText={[" designer", " developer", " creative"]} />
                                            </span>
                                        </h2>
                                    </div>
                                    <div className="col-md-12 text-left">
                                        <a className="btn header_btn" href="#portfolio">Portfolio</a>
                                        <a className="btn header_btn" href="#contact">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Header;