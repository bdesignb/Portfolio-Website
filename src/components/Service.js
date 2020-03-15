


import React, { Component } from 'react';
import '../App.css';

class Service extends Component {
    render() {

        if (this.props.data) {
            var service = this.props.data.map(function (service) {
                return (
                    <div className="col-lg-3 col-md-6">
                        <div className="text-center service">
                            <div className="service-icon mb-4">
                                <i className={service.className}></i>
                            </div>
                            <h4 className="mb-3">{service.name}</h4>
                            <p>{service.description}</p>
                        </div>
                    </div>)
            });
        }

        return (

            <section className="section" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* START SECTION TITLE */}
                            <div className="section-title">
                                <h4>Service I Provide</h4>
                                <h2>About Me</h2>
                            </div>
                            {/* END SECTION TITLE */}
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justy-content-center">
                        {service}
                    </div>
                </div>
            </section>
        )
    }
}

export default Service;
