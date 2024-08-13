import React from 'react';
import { useState } from 'react';
import api from '../../api';
import animationData3 from "../registration/Animation3.json"
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

const RegisterTeam = () => {
    const [teamName, setTeamName] = useState("")
    const [contactName, setContactName] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const data = {
        teamName, 
        contactName,
        contactEmail
    }

    // register teams
    const registerTeam = (e) => {
        e.preventDefault();

        console.log("Registering with data:", data)
        api
            .post("/register-team", data)
            .then((res) => {
                if (res.status === 201) {
                    navigate("/team-successful")
                    // alert ("Team successfully registered");

                } else {
                    setError("failed to register team")
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
                    alert("Error: No response received from the server");
                } else {
                    // Something else caused an error
                    console.error("Error details:", err.message);
                    setError("Error: " + err.message);
                }
            })
    };

    return (
        <>
        <div className='min-h-[90vh] bg-gray-900 text-white sm:w-[50vw] w-[70%] mx-auto sm:mt-16 mt-16'>
            <div className='mx-auto mb-8 w-[50%] md:w-[250px]'>
                 <Lottie
                    animationData={animationData3}
                    loop={true}
                    autoplay={true}
                />
            </div>
            <div className="">
                <div>
                    <p className='mb-6 font-bold text-3xl text-center'>Register Team</p>
                    <label htmlFor="teamName" className=''>Your Team Name</label>
                    <input 
                        type="text"
                        name='teamName' 
                        required
                        onChange={(e) => setTeamName(e.target.value)}
                        value={teamName}
                        placeholder='Team Name'
                        className='mt-4 rounded p-2 w-full bg-gray-700'
                    />
                    {error && <p className="text-red-500">{error}</p>}
                </div>
                <div className='mt-2'>
                    <label htmlFor="contactName">What is your Name</label>
                    <input 
                        type="text" 
                        name='contactName'
                        required
                        onChange={(e) => setContactName(e.target.value)}
                        value={contactName}
                        placeholder='Contact name' 
                        className='mt-4 rounded p-2 w-full bg-gray-700'
                    />
                </div>
                <div className='mt-2'>
                    <label htmlFor="contactName">What is your email</label>
                    <input 
                        type="email" 
                        name='contactEmail'
                        required
                        onChange={(e) => setContactEmail(e.target.value)}
                        value={contactEmail}
                        placeholder='Contact email' 
                        className='mt-4 rounded p-2 w-full bg-gray-700'
                    />
                </div>
                
                <button className='rounded text-center font-bold bg-pink-500 p-2 w-full mt-6' onClick={registerTeam}>
                    Register
                </button>
                
            </div>
        </div>
            
        </>
    );
}

export default RegisterTeam;
