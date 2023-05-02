import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext)
    const location = useLocation()

    if (loader) {
        return (
            <div className='d-flex justify-content-center h-25 align-items-center'>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to='/login' ></Navigate>
};

export default PrivateRoute;