import React from 'react';
import Lottie from "lottie-react";
import animationData from "../assets/Animation.json";
import { NavLink, Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
        <div className='min-h-[100vh] grid md:grid-cols-5 gap-4 pt-16'>

            <div className='text-white p-3 place-content-center bg-gray-700 h-[80vh] rounded-lg p-5 m-6  md:col-span-2'>
                
                {/* <p className='text-2xl sm:text-4xl mb-5 md:mb-8 text-center md:text-left'>Welcome to the Hackathon Registration.</p>
                <div className='text-center md:text-left text-sm'>
                    <div className='rounded-lg mb-5'>
                        <p className='text-2xl'>Register as an Applicant</p>
                        <p className=''>Join us by registering as an individual participant.</p>
                    </div>
                    <div className='rounded-lg'>
                        <p className='mt-5 text-xl'>Register as a Team</p>
                        <p>Form a team and then register as an applicant to compete together.</p>
                        <p>Be sure to select the correct Team Name from the list of teams while registering.</p>
                        <p>Get ready to innovate and collaborate!</p>
                    </div>
                </div> */}
            </div>

            <div className='text-white place-content-center min-h-[30vh] md:col-span-3 '>
                <div style={{ width: '250px', height: '250px' }} className='mx-auto mb-10 md:block hidden'>
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div className='grid md:grid-cols-2 gap-2'>
                    <div className='flex justify-end'>
                        <button className='md:w-[60%] w-[90%] bg-gray-600 hover:bg-gray-500 p-2 rounded-lg font-bold '>
                        <Link to="/register-applicant" className="text-white text-sm">
                            Register as Applicant
                        </Link>
                        </button><br/>
                    </div>
                    <div className=''>
                        <button className='md:w-[60%] w-[90%] bg-pink-500 hover:bg-pink-600 p-2 rounded-lg font-bold '>
                            <Link to="/register-team" className='text-sm' 
                            >
                                Register Team
                            </Link>
                            
                        </button>
                    </div>
                </div>            
            </div>
        </div>
        </>
    );
}

export default Register;
