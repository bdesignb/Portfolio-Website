import React, { Component } from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';

class Testimonials extends Component {

    render() {
        var testimonial = this.props.data.map((testimonial) => {
            return (
                <Carousel.Item>
                    <div className="testimonial-caption">
                        <div className="testimonial-rating text-warning"></div>
                        <p>{testimonial.text}</p>
                        <h4>{testimonial.country}</h4>
                    </div>
                </Carousel.Item>
            )
        });

        return (
            <section className="testimonial" id="testimonial">
                <div className="testimonial-bg fixed-bg">
                    <div className="testimonial-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div className="testimonial-title">
                                        <h2>CLIENTS ABOUT ME</h2>
                                    </div>
                                    <Carousel controls={false}>
                                        {testimonial}
                                    </Carousel>
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