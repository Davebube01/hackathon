import React, { useEffect, useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const ApplicantsTable = () => {
    const navigate = useNavigate();
    const [applicants, setApplicants] = useState([])

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        api
            .get("/registered-applicants")
            .then((res) => res.data)
            .then((data) => {
                const sortedData = data.sort((a, b) => a.first_name.localeCompare(b.first_name));
                setApplicants(sortedData); 
                console.log(sortedData)
            })
            .catch((err) => alert(err))
    }

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <div className='min-h-[100vh]'>
            <header className='inset-0 top-0 fixed w-full left-0 py-2 h-16 bg-gray-500'>
                <button className='rounded text-center font-bold bg-teal-500 p-2 text-white float-end mr-2 mt-1' onClick={handleLogout}>Logout</button>
            </header>

            <div className='mt-16'>
                <p className='text-2xl mt-2'>Users </p>
                <hr className='border-2 mt-2'/>
                
            </div>
        </div>
    );
}

export default ApplicantsTable;
