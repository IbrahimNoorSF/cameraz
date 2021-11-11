import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    // state for error
    const [errorMessage, setErrorMessage] = useState();
    // state of name
    const [name, setName] = useState({});
    // state if email
    const [email, setEmail] = useState({});
    // state of password
    const [password, setPassword] = useState({});
    const { newRegistration } = useAuth();

    const location = useLocation();
    const history = useHistory();

    // redirecting
    const redirect_url = location?.state?.from || '/';

    const handleRegistrationSubmit = e => {
        e.preventDefault();
    }
    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleSubmitRegistration = () => {
        console.log(email, password, name);
        newRegistration(email, password, name)
            .then(result => {
                history.push(redirect_url);
                window.location.reload();
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    }
    return (
        <div>
            <form className="container mt-5 shadow rounded p-5" onSubmit={handleRegistrationSubmit}>
                <div className="m-5">
                    <h1 className="text-center mb-4">Please <span className="text-danger">Register</span></h1>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example1" className="form-control" onBlur={handleName} required />
                            <label className="form-label" htmlFor="form3Example1">Name</label>
                        </div>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="email" id="form3Example3" className="form-control" onBlur={handleEmail} required />
                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form3Example4" className="form-control" onBlur={handlePassword} required />
                        <label className="form-label" htmlFor="form3Example4">Password</label>
                    </div>
                    <p className="text-danger">{errorMessage}</p>
                    <button type="submit" className="button-login mb-4" onClick={handleSubmitRegistration}>Sign up</button>
                    <div className="text-center">
                        <p>Already Registered? <Link to="/login">Login</Link></p>
                    </div>
                    <p></p>
                </div>
            </form>
        </div>
    );
};

export default Register;