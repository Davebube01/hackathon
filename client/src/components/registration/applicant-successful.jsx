import React from 'react';
import { useNavigate } from 'react-router-dom';
import confirmed2 from "../registration/confirmed-img.png"

const ApplicantSuccessful = () => {
    const navigate = useNavigate()

    const home = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <div className='text-white min-h-[90vh] bg-gray-900 sm:w-[40vw] w-[90%] mx-auto text-center'>
            <div className='mx-auto mb-8 w-[50%] md:w-[200px] sm:mt-16 mt-24'>
                <img src={confirmed2} alt="" />
            </div>
            <h1 className='mb-10 text-3xl'>REGISTRATION SUCCESSFULLY</h1>

            <p className='text-sm'>You have successfully been registered as an applicant. You will recieve an email shortly confirming you registration</p>
            <button onClick={home} className='p-2 bg-pink-500 rounded mt-5'>Return to Home</button>
        </div>
    );
}

export default ApplicantSuccessful;
