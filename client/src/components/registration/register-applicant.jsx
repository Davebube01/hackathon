import React, { useEffect, useState } from 'react';
import api from '../../api';
import animationData2 from "../registration/Animation2.json"
import Lottie from "lottie-react";
import { useNavigate } from 'react-router-dom';

const Applicant = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [teamName, setTeamName] = useState("")
    const [showFirstDiv, setShowFirstDiv] = useState(true)
    const [showSecondDiv, setShowSecondDiv] = useState(false)
    const [showThirdDiv, setShowThirdDiv] = useState(false)
    // for form error of the first name div ensuring the form is filled before next div is shown
    const [formErrors, setFormErrors] = useState({});
    const [formErrors2, setFormErrors2] = useState({});
    const [error, setError] = useState(""); // State to hold error message
    const [teamsData, setTeamsData] = useState([])
    const navigate = useNavigate() // to navigate to success page after user registers



    // handle the onclick event to change div during registration
    const handleStartClick = () => {
       const errors = {};
        if (firstName.trim() === '' || lastName.trim() === '') {
            errors.firstName = 'Your first name and last name are required';
        }

        // Update form errors
        setFormErrors(errors);

        // If no errors, show the second div
        if (Object.keys(errors).length === 0) {
            setShowSecondDiv(true);
            setShowFirstDiv(false)
        }
    };

    const handleReturnToStart = () => {
        setShowSecondDiv(false);
        setShowFirstDiv(true)
    }

    const handleReturnToEmailDiv = () =>{
        setShowThirdDiv(false);
        setShowSecondDiv(true);
    }

    const handleShowSubmitDiv = () => {
        const errors = {};
        if (email.trim() === '' || phoneNumber.trim() === '') {
            errors.error = 'Your email and phone number are required';
        }
        // Update form errors
        setFormErrors2(errors);

         // If no errors, show the second div
         if (Object.keys(errors).length === 0) {
            setShowThirdDiv(true);
            setShowSecondDiv(false);
        }
        
    }

    // get team details for input in form
    useEffect(() => {
        fetchTeams();
    }, [])

    const fetchTeams = () => {
        api
            .get("/registered-teams")
            .then((res) => res.data)
            .then((data) => { setTeamsData(data); console.log(data) })
            .catch((err) => alert(err))
    }

    // to send the data of applicant to server
    const data = {
        firstName, 
        lastName,
        email,
        phoneNumber,
        teamName,
    }

    const registerApplicant = (e) => {
        e.preventDefault();

        console.log("Registering with data:", data);
        api
            .post("/register-applicant", data)
            .then((res) => {
                if (res.status === 201) {
                    // alert ("succesfully registered");
                    navigate("/applicant-successful")
                } else {
                    setError("failed to register");
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
            });
    };


    return (
        <>
        <div className='min-h-[90vh] bg-gray-00 text-white sm:w-[50vw] w-[70%] mx-auto sm:mt-16 mt-16'>
    
                <div className='mx-auto mb-8 w-[70%] md:w-[250px]'>
                    <Lottie
                        animationData={animationData2}
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div className={`${showFirstDiv ? 'block' : 'hidden'} `}>
                    <p className='mb-6 font-bold text-3xl text-center'>Register Now</p>
                    <label htmlFor="" className=''>Whats Your Name</label>
                    <input 
                        type="text"
                        name='firstName' 
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        placeholder='First Name'
                        className='mt-4 rounded p-2 w-full bg-gray-700'
                    />
                    <br />
                    
                    <input 
                        type="text" 
                        name='lastName'
                        required
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        placeholder='Last name' 
                        className='mt-4 rounded p-2 w-full bg-gray-700'
                    />
                    <br />
                    {formErrors.firstName && <p className="text-red-500 text-xs">{formErrors.firstName}</p>}
                    <button className='rounded text-center font-bold bg-pink-500 p-2 w-full mt-4' onClick={handleStartClick}>
                        Start
                    </button>
                    
                </div>
                <div className={`${showSecondDiv ? 'block mt-10' : 'hidden' }`}>
                    {error && <p className="text-red-500">{error}</p>}
                    <label htmlFor="email">Email</label><br />
                    <input 
                        type="email" 
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        placeholder='email' 
                        className='my-2 rounded p-2 w-full bg-gray-700'
                    />
                    <br />
                    <label htmlFor="email" className=''>Phone Number</label><br />
                    <input 
                        type="text" 
                        name='phoneNumber'
                        placeholder='phone Number' 
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        required
                        className='mt-2 rounded p-2 w-full bg-gray-700'
                    />
                    {formErrors2.email && <p className="text-red-500 text-xs">{formErrors2.error}</p>}
                    <div className='flex gap-1'>
                        <button className='rounded text-center font-bold bg-teal-500 p-1 w-[10%] mt-4 text-2xl' onClick={handleReturnToStart}>
                            <span ><ion-icon name="caret-back-outline" className="" ></ion-icon></span>
                        </button>
                        <button onClick={handleShowSubmitDiv} className='rounded text-center font-bold bg-pink-500 p-2 w-[90%] mt-4'>Continue</button>
                       
                    </div>
                    
                </div>

                <div className={`${showThirdDiv  ? 'block mt-10' : 'hidden' }`}>
                    <div>
                        <p>If your in a team... choose</p>
                        <select className='mt-2 rounded p-2 w-full bg-gray-700' name='teamName' onChange={(e) => setTeamName(e.target.value)}>
                            <option value="">None</option> 
                            {teamsData.map((team, index) => (
                                <option key={index} value={team.team_name}>{team.team_name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex gap-1 mt-4'>
                        <button className='rounded text-center font-bold bg-teal-500 p-1 w-[10%] mt-4 text-2xl' onClick={handleReturnToEmailDiv}>
                            <span ><ion-icon name="caret-back-outline" className="" ></ion-icon></span>
                        </button>
                        <button onClick={registerApplicant} className='rounded text-center font-bold bg-pink-500 p-2 w-[90%] mt-4'>Submit</button>
                    </div>
                    
                </div>
        </div>
        </>
    );
}

export default Applicant;
