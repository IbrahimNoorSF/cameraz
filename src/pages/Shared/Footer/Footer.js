import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mt-5">
            <footer className="text-center text-lg-start bg-light text-muted">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <Link to="https://www.facebook.com/" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="https://www.twitter.com/" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="https://www.google.com/" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </Link>
                        <Link to="https://www.instagram.com/" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>CameraZ
                                </h6>
                                <p>
                                    Your Dream, Our Responsibility
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to="/home" className="text-reset">Home</Link>
                                </p>
                                <p>
                                    <Link to="/services" className="text-reset">Services</Link>
                                </p>
                                <p>
                                    <Link to="/about" className="text-reset">About</Link>
                                </p>
                                <p>
                                    <Link to="/contact" className="text-reset">Contact</Link>
                                </p>
                                <p>
                                    <Link to="/login" className="text-reset">Login/Register</Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> Mirpur, Bangladesh</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    contact@CameraZ.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4">
                    © 2021 Copyright <NavLink to="/" className="text-decoration-none text-muted">CameraZ</NavLink>
                </div>
            </footer>
        </div>
    );
};

export default Footer;