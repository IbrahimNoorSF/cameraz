import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from '@mui/material/Button';

const NavBar = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">CameraZ</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/explore">Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="dropdown button-left d-flex">
                        {/* user name */}
                        {
                            user?.displayName &&
                            <div className="dropdown button-left">
                                <button className="btn btn-dark outlline-none dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user"></i> {user.displayName || user.name}
                                </button>
                                <ul className="dropdown-menu mb-5" aria-labelledby="dropdownMenuButton1">
                                    <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
                                    <li><Link className="nav-link" to="/" onClick={logOut}><span className="fw-black">LogOut</span></Link ></li>
                                </ul>
                            </div>
                        }
                        {/* logout btn / login btn setup */}
                        {
                            !user?.displayName &&
                            <Link to="/login"><button className="btn btn-dark">Login/Register</button></Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;