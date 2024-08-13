import React from 'react';
import { Navigate } from 'react-router-dom';
import UseAuth from './useAuth';

const ProtectedRoute = ({children}) => {
    const isAuthenticated = UseAuth();

    if (isAuthenticated == false) {
        return <Navigate to="/login" replace />
    }

    
    return children;
};

export default ProtectedRoute;
