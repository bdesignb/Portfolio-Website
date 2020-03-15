import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    render() {
        if(this.props.data){
            var networks= this.props.data.map(function(network){
              return <li key={network.name}><a href={network.url} target="_blank" title={network.title}><i className={network.className}></i></a></li>
            })
          }

        return (
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="inner-footer">
                                    {/* LOGO */}
                                    <a href="#"><img src="./img/logo.png" alt="" /></a>
                                    <p>B.DESIGN <br /> Graphic Design / Web Design / Development</p>
                                    {/* START SOCIAL ICONS */}
                                    <ul>                                        
                                        {networks}
                                    </ul>
                                    {/* END SOCIAL ICONS */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                {/* START FOOTER MENU */}
                                <div className="left-menu">
                                    <ul>
                                        <li><a href="#home">Home</a></li>
                                        <li><a href="#service">Service</a></li>
                                        <li><a href="#portfolio">Portfolio</a></li>
                                        <li><a href="#testimonial">Testimonials</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                                {/* END FOOTER MENU */}
                            </div>
                            <div className="col-md-5">
                                {/* START COPYRIGHT */}
                                <div className="copyright">
                                    <p>&copy;  2019 POWERED BY B.DESIGN</p>
                                </div>
                                {/* END COPYRIGHT */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;