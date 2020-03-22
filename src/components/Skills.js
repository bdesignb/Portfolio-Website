import React, { Component } from 'react';
import '../App.css';

class Skills extends Component {

    render() {

        if (this.props.data) {
            var skills = this.props.data.map(function (skills) {
                var className = 'bar-expand ' + skills.name.toLowerCase();
                return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
            })
        }

        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>”There are three responses to a piece of design – yes, no, and wow! Wow is the one to aim for.”</h4>
                            <h6>Milton Glaser </h6>
                            <p>Work with me! I am creative, persistent person who likes design. I am a detail-oriented, skilled and always trying to use best working practices.</p>
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            <div className="bars">
                                <ul className="skills">
                                    {skills}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
