import React, { useEffect, useState } from 'react';

const UseAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    useEffect(() => {
        const token = sessionStorage.getItem("token")
        try {
            if (token) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
            console.log("Token from sessionStorage:", token);
        }
        catch {
            console.log(error)
            setIsAuthenticated(false)
        }
        
        // setIsAuthenticated(!!token); // This sets the token to a boolean
    },[])

    return isAuthenticated;
}

export default UseAuth;
