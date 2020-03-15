import React, { Component } from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';


class Testimonials extends Component {

    render() {
        if (this.props.data) {
            var testimonial = this.props.data.map(function (testimonial) {
                return (
                    <Carousel.Item>
                        <div className="testimonial-caption">
                            <div className="testimonial-rating text-warning"></div>
                            <p>{testimonial.text}</p>
                            <h4><a href="#">{testimonial.country}</a></h4>
                        </div>
                    </Carousel.Item>
                )
            });
        }

        return (
            <section className="testimonial" id="testimonial">
                <div className="testimonial-bg fixed-bg">
                    <div className="testimonial-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">

                                    {/* START TESTIMONIAL TITLE */}
                                    <div className="testimonial-title">
                                        <h2>CLIENTS ABOUT ME</h2>
                                    </div>
                                    {/* END TESTIMONIAL TITLE */}

                                    {/* START TESTIMONIAL CAROSEL */}
                                    <div id="testimonial-carosel-1" data-ride="carousel">
                                        {/* START Indicators */}
                                        <ol className="carousel-indicators">
                                            <li data-target="#testimonial-carosel-1" data-slide-to="0"></li>
                                            <li data-target="#testimonial-carosel-1" data-slide-to="1"></li>
                                            <li data-target="#testimonial-carosel-1" data-slide-to="2"></li>
                                            <li data-target="#testimonial-carosel-1" data-slide-to="3"></li>
                                        </ol>
                                        {/* END Indicators */}

                                        <Carousel controls={false}>
                                            {testimonial}
                                        </Carousel>
                                    </div>
                                    {/* END TESTIMONIAL CAROSEL */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Testimonials;