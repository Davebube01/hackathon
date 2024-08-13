import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/download1.png"


const Home = () => {
    return (
        <>
        <div className='min-h-[40vh] md:min-h-[65vh] grid grid-cols-5 text-white container pt-16'>
            <div className='md:col-span-2 sm:mx-auto px-auto flex col-span-5 px-4 md:ml-10'>
                <div className=' md:w-[80vw] lg:w-[50vw]  content-center ml-3 sm:ml-5'>
                    <div className='flex mb-0 '>
                        <h1 className='lg:text-7xl text-[35px]'>EDSINE</h1>
                        <p className=' bg-gray-800 px-2 lg:px-10 lg:py-3 lg:mt-4 h-full text-xl rounded-lg text-center py-1 ml-3 m-auto text-[16px]' ><b>20-21 OCT 2024</b></p>
                    </div>
                    
                    {/* <p className='lg:text-7xl md:text-5xl sm:text-6xl text-[35px]'>TECHNOLOGIES</p> */}
                    <p className='lg:text-5xl md:text-[20px] text-[25px] ' >ANNUAL HACKATHON</p>
                    <p className='lg:text-[20px] md:text-[15px] text-[12px]'>“Innovate Governance with AI and Cloud Computing”</p>
                    <div className='mt-4'>
                        <button className='btn rounded-lg bg-pink-500 py-2 px-4 font-bold'>
                            <Link to="/register">
                                Register Here
                            </Link>
                        </button>
                    </div>  
                </div>  
            </div>
            <div className='min-h-[50vh]  md:block hidden md:col-span-3 span-4 ml-20'>
                <div  className='mx-auto my-10 md:block hidden'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
        <div className='my-5 md:my-0 text-white grid md:grid-cols-3 md:mx-10 mx-8'>
            <div className="sm:min-h-[20vh] min-h-[10vh] md:rounded-l-lg rounded-lg bg-gray-800 shadow p-2 md:p-10 mb-1">
                <p className='text-3xl md:text-4xl mb-10'>OVERVIEW</p>
                <p>
                    This hackathon aims to harness the power of Artificial Intelligence (AI) and Cloud Computing to create innovative solutions 
                    that can improve governance at both state and federal government levels
                </p>
            </div>
            <div className="sm:min-h-[20vh] lg:min-h-[40vh] min-h-[10vh] md:rounded-none rounded-lg bg-gray-800 shadow p-2 md:p-10 mb-1">
                <p className='text-3xl md:text-4xl mb-10'>TEAMS</p>
                <p>
                    Open to developers worldwide.
                    Participants must be 18 years or older.
                    Both individuals and teams (up to 4 members) are allowed.
                </p>
            </div>
            <div className="sm:min-h-[20vh] lg:min-h-[40vh] min-h-[10vh] md:rounded-r-lg rounded-lg bg-gray-800 shadow p-2 md:p-10 mb-1">
                <p className='text-3xl md:text-4xl mb-10'>PRIZE</p>
                <p>The event will be a "winner takes it all” competition, where the best Minimum Viable Product (MVP) stands a chance to win <span className='text-xl font-bold'>$1000</span>.</p>
            </div>
        </div>
        </>
    );
}

export default Home;

