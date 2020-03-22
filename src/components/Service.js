import React, { Component } from 'react';
import '../App.css';
import Title from './Title';

class Service extends Component {
    render() {
        var services = this.props.data.map((service) => {
            return (
                <div className="col-lg-4 col-md-6">
                    <div class="single-service">
                        <i className={service.className}></i>
                        <h4 className="mb-3">{service.name}</h4>
                        <p>{service.description}</p>
                    </div>
                </div>)
        });
        return (
            <section className="section" id="service">
                <Title title='About Me' subtitle='Service I Provide' />
                <div className="container">
                    <div className="row justy-content-center">
                        {services}
                    </div>
                </div>
            </section>
        )
    }
}

export default Service;
