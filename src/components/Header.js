

import React, { Component } from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Typer from './Typer';
import Nav from './Nav';
import ProgressBar from 'react-bootstrap/ProgressBar'


class Header extends Component {

    render() {
        return (
            <div>
                <Nav />
                <div className="header" >
                    <div className="overlay">
                        <div className="header-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-left">
                                        <h4><span>GRAPHIC DESIGN / </span><span>WEB DESIGN / </span><span> Development</span></h4>
                                        <h2>I AM
                                    <span>
                                                <Typer dataText={[" DESIGNER", " DEVELOPER", " CREATIVE"]} />
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