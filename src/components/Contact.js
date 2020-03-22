import React, { Component } from 'react';
import '../App.css';
import Title from './Title';

class Contact extends Component {
    render() {
        var contact = this.props.data.map((contact) => {
            return (
                <div className="col-md-4">
                    <div class="contact">
                        <i className={contact.icon}></i>
                        <h4>{contact.name}</h4>
                        <p>{contact.title}</p>
                    </div>
                </div>
            )
        })
        return (
            <section className="contact-section" id="contact">
                <div className="container justify-content-center">
                    <div className='contact-title'>
                        <div className="row">
                            <div className="col-xl-12">
                                <h2><span>contact me</span> for more information</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {contact}
                    </div>
                </div>
            </section>
        )
    }
}


export default Contact;
