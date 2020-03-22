import React, { Component } from 'react';
import '../App.css';

class Facts extends Component {
    render() {

        var facts = this.props.data.map((fact) => {
            return (
                <div className="col-md-3 text-center">
                    <div className="single-fact">
                        <i className={fact.icon}></i>
                        <h2>{fact.count}</h2>
                        <p>{fact.title}</p>
                    </div>
                </div>
            )
        });

        return (
            <div className="facts fixed-bg" id='facts'>
                <div className="overlay black-overlay">
                    <div className="container">
                        <div className="row">
                            {facts}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Facts;
