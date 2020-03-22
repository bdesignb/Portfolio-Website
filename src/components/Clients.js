import React, { Component } from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Title from './Title';


class Clients extends Component {

    render() {
        var clients = this.props.data;
        var clientsCarousel = [];

        for (let i = 0; i < clients.length; i += 4) {
            clientsCarousel.push(
                <Carousel.Item>
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <img src={clients[i].image} />
                        </div>
                        <div className="col-md-3 text-center">
                            <img src={clients[i + 1].image} />
                        </div>
                        <div className="col-md-3 text-center">
                            <img src={clients[i + 2].image} />
                        </div>
                        <div className="col-md-3 text-center">
                            <img src={clients[i + 3].image} />
                        </div>
                    </div>
                </Carousel.Item>
            )
        };

        return (
            <section className="clients" id="clients">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <Title title='my clients' subtitle='check out' />
                                <Carousel controls={false}>
                                    {clientsCarousel}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Clients;






