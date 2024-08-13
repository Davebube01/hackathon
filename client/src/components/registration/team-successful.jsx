import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import confirmed2 from "../registration/confirmed-img.png"

const TeamSuccessful = () => {
    const navigate = useNavigate()

    const home = (e) => {
        e.preventDefault()
        navigate("/register-applicant")
    }

    return (
        <div className='text-white min-h-[90vh] bg-gray-900 sm:w-[40vw] w-[90%] mx-auto text-center mt-16 pt-10'>
            <div className='mx-auto mb-8 w-[50%] md:w-[200px] sm:mt-16'>
                {/* <Lottie
                    animationData={confirmed}
                    loop={true}
                    autoplay={true}
                /> */}

                <img src={confirmed2} alt="" />
            </div>
            <h1 className='mb-10 text-3xl'>TEAM REGISTRATION SUCCESSFULLY</h1>

            <p className='text-sm'>You have successfully registered your team. Please proceed to the applicant page to register yourself as an applicant and select your team</p>
            <button onClick={home} className='p-2 bg-pink-500 rounded mt-5'>Register as Applicant</button>
        </div>
    );
}

export default TeamSuccessful;
