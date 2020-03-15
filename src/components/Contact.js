import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
    render() {
        return (

            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="contact-inner">
                        <div className="row">
                            <div className="col-xl-12 text-center">
                                <h2><span>CONTACT ME</span> FOR MORE INFORMATION</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">              
                                    {/* START CONTACT FORM */}
                                    <form action="mailto:bozana.bundalo@gmail.com">
                                        <input type="email" className="form-control" placeholder="ENTER YOUR EMAIL" name="EMAIL" />
                                        <textarea type="textarea" className="form-control" placeholder="ENTER YOUR MESSAGE" name="EMAIL" />
                                         <button type="submit" className="btn btn-contact">SEND MESSAGE</button>                                       
                                    </form>
                                    {/* END CONTACT FORM */}                               
                            </div>
                            <div className="col-md-4">
                                <div className="single-contact">
                                    <i className="fas fa-map-marker-alt fa-3x"></i>
                                    <h5>Address</h5>
                                    <p>Novi Sad, Serbia</p>
                                </div>
                                <div className="single-contact">
                                    <i className="fas fa-phone fa-2x"></i>
                                    <h5>Phone</h5>
                                    <p>(+381) 64 273 xxx</p>
                                </div>
                                <div className="single-contact">
                                    <i className="fas fa-envelope fa-3x"></i>
                                    <h5>Email</h5>
                                    <p>@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Contact;
