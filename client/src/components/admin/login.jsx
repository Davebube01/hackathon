import React from 'react';
import { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        const opts = {
            username,
            password
        }
        console.log("Logging in with data: ", opts);

        api
            .post("/login", opts)
            .then((res) => {
                if (res.status === 200) {
                    const data = res.data
                    console.log("this came from the backend", data);
                    sessionStorage.setItem("token", data.access_token);
                    navigate("/admin");
                } else {
                    setError("failed to log in");
                    console.log(error)
                }
            })
            .catch((err) => {
                if (err.response) {
                    // Server responded with a status other than 2xx
                    console.error("Error response:", err.response.data);
                    setError("Error: " + err.response.data.message);
                } else if (err.request) {
                    // Request was made but no response received
                    console.error("Error request:", err.request);
                    alert("Error: Connection failed");
                } else {
                    // Something else caused an error
                    console.error("Error details:", err.message);
                    setError("Error: " + err.message);
                }
            });
    }

    return (
        <>
            <div className='min-h-[100vh] place-content-center bg-gray-900'>
                <div className='grid sm:w-[30vw] mx-auto pt-10 text-white space-y-5 px-5 '>
                    <p className='text-4xl text-center mb-12'>Sign into your account</p>
                    <div className=''>
                        <label htmlFor="email" className='font-medium '>Username</label><br></br>
                        <input 
                            type="text" 
                            name='username'
                            required
                            value={username}
                            className='mt-1 rounded p-2 w-full bg-gray-700'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className=''>
                        <label htmlFor="password" className='font-medium'>Password</label><br></br>
                            <input 
                                type="text" 
                                name='password'
                                required
                                value={password}
                                className='mt-1 rounded p-2 w-full bg-gray-700'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>

                    <button 
                        className='rounded text-center font-bold bg-teal-500 p-2 w-full'
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </div>
                
            </div>
        </>
    );
}

export default Login;
