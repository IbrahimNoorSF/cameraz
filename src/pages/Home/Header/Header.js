import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-details">
                <h1>Capture your <br />Beautiful moments</h1>
                <Link to="/explore" className="btn btn-dark btn-lg rounded mt-3">Explore More</Link>
            </div>
        </div>
    );
};

export default Header;