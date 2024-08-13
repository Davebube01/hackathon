import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

const Admin = () => {
    const navigate = useNavigate();
    const [applicants, setApplicants] = useState([]);
    const [teams, setTeams] = useState([])
    const [usersTable, setUsersTable] = useState(false);
    const [teamsTable, setTeamsTable] = useState(false);

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        fetchTeams();
    }, [])

    const getUsers = () => {
        api
            .get("/registered-applicants")
            .then((res) => res.data)
            .then((data) => {
                const sortedData = data.sort((a, b) => a.first_name.localeCompare(b.first_name));
                setApplicants(sortedData); 
            })
            .catch((err) => alert(err))
    }

    const fetchTeams = () => {
        api
            .get("/registered-teams")
            .then((res) => res.data)
            .then((data) => {
                const sortedTeams = data.sort((a, b) => a.team_name.localeCompare(b.team_name));
                setTeams(sortedTeams); console.log(sortedTeams) 
            })
            .catch((err) => alert(err))
    }

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate('/login');
    }

    const handleUsers = () => {
        setUsersTable(true);
        setTeamsTable(false)
    }

    const handleTeams = () => {
        setTeamsTable(true)
        setUsersTable(false)
    }

    return (
        <div className='min-h-[100vh]'>
            <header className='inset-0 top-0 fixed w-full left-0 py-2 h-16 bg-gray-500'>
                <button className='rounded text-center font-bold bg-teal-500 p-2 text-white float-end mr-2 mt-1' onClick={handleLogout}>Logout</button>
            </header>

            <div className='mt-16'>
                <div className=''>
                    <button className='text-2xl mt-2 rounded bg-teal-500 px-3 py-2 text-white w-36' onClick={handleUsers}>Applicants </button>
                    <button className='text-2xl mt-2 rounded bg-teal-500 px-3 py-2 text-white w-32 ml-5' onClick={handleTeams}>Teams </button>
                </div>
                
                <hr className='border-2 mt-2'/>

                <div className={`${usersTable ? "block" : "hidden"} overflow-x`}>
                    <table className='min-w-[97%] ml-5 divide-y divide-gray-200 dark:divide-neutral-700 m table-auto overflow-scroll'>
                        <caption class="caption-top">
                                <p className='text-2xl text-gray-700'> Applicants</p>
                        </caption>
                        <thead>
                            <tr className=''>
                                <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>First Name</th>
                                <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>last Name</th>
                                <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>Email</th>
                                <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>Phone Number</th>
                                <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>Team name</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200 dark:divide-neutral-700'>
                            {applicants.map((applicant, index) => (
                                <tr key={index} className='odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700'>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>{applicant.first_name}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>{applicant.last_name}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>{applicant.email}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>{applicant.phone_number}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>{applicant.team_name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={`${teamsTable ? "block" : "hidden"} overflow-x`}>
                    <table className='min-w-[97%] ml-5 divide-y divide-gray-200 dark:divide-neutral-700 overflow-scroll table-auto'>
                    <caption class="caption-top">
                            <p className='text-2xl text-gray-700'> Teams</p>
                    </caption>
                        <thead>
                            <tr className=''>
                                <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>Team Name</th>
                                <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>Contact Person</th>
                                <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>Contact Email</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200 dark:divide-neutral-700'>
                            {teams.map((team, index) => (
                                <tr key={index} className='odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700'>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>{team.team_name}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>{team.contact_name}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>{team.contact_email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            
        </div>
    );
}

export default Admin;
