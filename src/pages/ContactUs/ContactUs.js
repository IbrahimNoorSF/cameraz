import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const ContactUs = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <h1 className="text-center mt-4">Contact Us</h1>
                <div className="container py-2 mb-5 w-75">
                    <form id="contactForm">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="emailAddress">Email Address</label>
                            <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" />
                            <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" type="text" placeholder="Message" data-sb-validations="required" style={{ height: "100px" }}></textarea>
                            <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
                        </div>
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center mb-3">Form submission successful!</div>
                        </div>
                        <div className="d-none" id="submitErrorMessage">
                            <div className="text-center text-danger mb-3">Error sending message!</div>
                        </div>
                        <div className="d-grid">
                            <Link to="/home"><button className="btn btn-dark btn-lg">Submit</button></Link>
                        </div>

                    </form>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;