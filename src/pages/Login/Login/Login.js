import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setUser, setIsLoading } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirectUri = location.state?.from || '/home';

    // google log in
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirectUri)
            })
            .finally(() => setIsLoading(false));
    }
    return (
        // Sign in with google
        <div className="container my-5 py-5 bg-dark">
            <div className="row">
                <div className="col-sm-1 col-lg-4"></div>
                <div className="col-sm-1 col-lg-4 ">
                    <h4 className="text-white fw-bold fs-1 mt-5">Please Login</h4>
                    <small className="text-white d-block mb-5">Your must Log in with google</small>
                    <Button onClick={handleGoogleLogIn} className="btn btn-primary bg-primary mt-2 text-dark mx-auto my-5" type="submit">Sign In with Google</Button>
                </div>
                <div className="col-sm-1 col-lg-4"></div>
            </div>

        </div>
    );
};

export default Login;