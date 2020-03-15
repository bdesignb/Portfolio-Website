

import React, { Component } from 'react';
import '../App.css';


class NewProject extends Component {

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 col-sm-1">
                            <div className="project-text">
                                <i className="far fa-heart"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <h2>If You Like My Work</h2>
                        </div>
                        <div className="col-md-5 col-sm-5">
                            <div className="h_p_button">
                                <a href="#contact" className="btn btn-project">
                                    Contact Me
								</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewProject;