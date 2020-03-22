import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    render() {

        var networks = this.props.data.map((network) => {
            return (
                <li key={network.name}>
                    <a href={network.url} target="_blank" title={network.title}>
                        <i className={network.className}></i>
                    </a>
                </li>
            )
        });

        return (
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="inner-footer">                                   
                                    <a href="#"><img src="./img/logo.png" alt="" /></a>
                                    <p>B.DESIGN <br /> Graphic Design / Web Design / Development</p>
                                    <ul>
                                        {networks}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="left-menu">
                                    <ul>
                                        <li><a href="#home">Home</a></li>
                                        <li><a href="#service">Service</a></li>
                                        <li><a href="#portfolio">Portfolio</a></li>
                                        <li><a href="#testimonial">Testimonials</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="copyright">
                                    <p>&copy;  2019 POWERED BY B.DESIGN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;