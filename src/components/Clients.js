
import React, { Component } from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';


class Clients extends Component {

    render() {

        var clients = this.props.data;
        var clientsCarousel = [];


        for (let i = 0; i < clients.length; i += 4) {
            clientsCarousel.push(
                <Carousel.Item>
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <img className="clients-img" src={clients[i].image} />
                        </div>
                        <div className="col-md-3 text-center">
                            <img className="clients-img" src={clients[i + 1].image} />
                        </div>
                        <div className="col-md-3 text-center">
                            <img className="clients-img" src={clients[i + 2].image} />
                        </div>
                        <div className="col-md-3 text-center">
                            <img className="clients-img" src={clients[i + 3].image} />
                        </div>
                    </div>
                </Carousel.Item>
            )
        };


        return (
            <section className="clients" id="clients">
                <div className="clients-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">

                                {/* START SECTION TITLE */}
                                <div className="section-title">
                                    <h4>CHECK OUT</h4>
                                    <h2>My Clients</h2>
                                </div>
                                {/* END SECTION TITLE */}

                                <div id="testimonial-carosel-1" data-ride="carousel">
                                    {/* START Indicators */}
                                    <ol className="carousel-indicators">
                                        <li data-target="#testimonial-carosel-1" data-slide-to="0"></li>
                                        <li data-target="#testimonial-carosel-1" data-slide-to="1"></li>
                                    </ol>
                                    {/* END Indicators */}

                                    {/* START CLIENTS CAROSEL */}
                                    <Carousel>
                                        {/* START CLIENT LIST */}
                                        {clientsCarousel}
                                    </Carousel>
                                </div>
                                {/* END CLIENTS CAROSEL */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Clients;






