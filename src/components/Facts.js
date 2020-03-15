
import React, { Component } from 'react';
import '../App.css';

class Facts extends Component {
    render() {
        return (
            <div className="facts fixed-bg" id='facts'>
                <div className="overlay black-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 text-center">
                                {/* START FACT */}
                                <div className="single-fact">
                                    <i className="far fa-heart"></i>
                                    <h2>400</h2>
                                    <p>Icon Downloads</p>
                                </div>
                                {/* END FACT */}
                            </div>
                            <div className="col-md-3 text-center">
                                {/* START FACT */}
                                <div className="single-fact">
                                    <i className="fas fa-pencil-alt"></i>
                                    <h2>20</h2>
                                    <p>Projects Completed</p>
                                </div>
                                {/* END FACT */}
                            </div>
                            <div className="col-md-3 text-center">
                                {/* START FACT */}
                                <div className="single-fact">
                                    <i className="fas fa-percent"></i>
                                    <h2>100%</h2>
                                    <p>Job Success</p>
                                </div>
                                {/* END FACT */}
                            </div>
                            <div className="col-md-3 text-center">
                                {/* START FACT */}
                                <div className="single-fact">
                                    <i className="far fa-star"></i>
                                    <h2>8</h2>
                                    <p>Contest Won</p>
                                </div>
                                {/* END FACT */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Facts;
