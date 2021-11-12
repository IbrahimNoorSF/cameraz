import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    // state for error
    const [errorMessage, setErrorMessage] = useState();
    // state for email
    const [email, setEmail] = useState({});
    // state for password
    const [password, setPassword] = useState({});
    const { handleLogin } = useAuth();
    // handling submit btn
    const handleLoginSubmit = e => {
        e.preventDefault();
    }

    const location = useLocation();
    const history = useHistory();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleLoginButton = () => {
        handleLogin(email, password)
            .then(result => {
                result?.user &&
                    history.push(redirect_url);
                window.location.reload();
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    }

    // redirecting
    const redirect_url = location?.state?.from || '/';
    return (
        <div>
            <form className="container shadow p-5 rounded mt-5" onSubmit={handleLoginSubmit}>
                <div className="m-5">
                    <h1 className="text-center mb-4">Please Login</h1>
                    <div className="form-outline-danger mb-4">
                        <input type="email" id="form2Example1" className="form-control" onBlur={handleEmail} required />
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                    </div>

                    <div className="form-outline-danger mb-4">
                        <input type="password" id="form2Example2" className="form-control" onBlur={handlePassword} required />
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                    </div>
                    <p className="text-danger">{errorMessage}</p>
                    <button type="submit" className="button-login mb-4" onClick={handleLoginButton}>Sign in</button>
                    <div className="text-center">
                        <p>New to CameraZ? <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;