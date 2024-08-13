import React from 'react';

const About = () => {
    return (
        <>
        <div className='min-h-[100vh] '>
            <div className='text-white text-center content-center md:min-h-[80vh] min-h-[30vh]  mb-10 hack'>
                <p className='text-2xl md:text-4xl'>EDSINE TECHNOLOGIES ANNUAL HACKATHON </p>
                <p className='text-base sm:block hidden'>"Innovate Governance with AI and Cloud Computing"</p>
            </div>
            <div className='container  mx-auto mb-10'>
                <p className='text-3xl md:text-4xl text-white md:text-center mb-5 mx-2'>Overview</p>
                <div className='grid sm:grid-cols-2 '>
                    <div className='col-span-1 bg-teal-200 md:min-h-[45vh] min-h-[20vh] m-4'></div>
                    <div className='col-span-1 place-content-center'>
                        <p className='text-white p-4 md:text-base text-base'>
                            This hackathon aims to harness the power of Artificial Intelligence (AI) and Cloud Computing to create innovative 
                            solutions that can improve governance at both state and federal government levels. The event will be a “winner takes it all” 
                            competition, where the best Minimum Viable Product (MVP) stands a chance to win <span className='font-bold md:text-xl text-lg'>$1000</span>.
                        </p>
                    </div>
                </div>
            </div>

            <div className='container mx-auto mb-10 grid sm:grid-cols-2 mt-20'>
                <div>
                    <p className='text-3xl md:text-4xl text-white md:text-center mb-8 mx-2'>About Edsine Technologies</p>
                    <p className='text-white mx-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorem error harum amet incidunt tempora libero sint consequuntur. Natus dolorem placeat repudiandae, deleniti alias nobis esse velit? In, quae fugiat laborum placeat maxime odit repellendus, 
                        officia animi sequi consequuntur recusandae ipsum amet impedit aliquam optio pariatur dolor. Voluptates, ratione odio. Fugiat tempora, 
                        excepturi reprehenderit repellendus minima aspernatur beatae architecto itaque ex ullam debitis dolore non aliquam, voluptas asperiores dignissimos illum, necessitatibus distinctio magnam. Iure ea nobis rerum voluptatibus dolores ratione debitis voluptate 
                        quas eveniet nihil alias suscipit praesentium, quidem ipsum neque ad! Saepe est commodi dicta rerum incidunt esse beatae?
                    </p>
                </div>
                <div className='col-span-1 bg-blue-200 md:min-h-[45vh] min-h-20[vh] m-4 sm:block hidden'>
                    
                </div>
            </div>

            <div>
                <p className='text-3xl md:text-4xl text-white md:text-center mb-8 mx-2'>Rules for Participation</p>
                <div className='grid md:grid-cols-2  container mx-auto p-2'>
                    <div className='col-span- mb-4'>
                        <p className='md:text-xl text-lg text-white'><span className='text-orange-500 '><ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>  Eligibity</p>
                    </div>
                    <div className=''>
                        <p className='md:text-base text-base pl-2 text-gray-300'>
                            Open to developers worldwide.<br/>
                            Participants must be 18 years or older.<br/>
                            Both individuals and teams (up to 4 members) are allowed.
                        </p>
                    </div>
                </div>
                <hr className='container mx-auto mt-12 border-gray-800'/>

                <div className='grid md:grid-cols-2 container mx-auto mt-8 '>
                    <div className='col-span- mb-4'>
                        <p className='md:text-xl text-lg text-white'><span className='text-orange-500 '><ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>  Registration</p>
                    </div>
                    <div className=''>
                        <p className='md:text-base text-base pl-2 text-gray-300'>
                            Participants must register online through the official hackathon website.<br />
                            Registration closes one week before the event start date.
                        </p>
                    </div>
                </div>
                <hr className='container mx-auto mt-12 border-gray-800'/>

                <div className='grid md:grid-cols-2 container mx-auto mt-8'>
                    <div className='col-span- mb-4'>
                        <p className='md:text-xl text-lg text-white'><span className='text-orange-500 '><ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>  Submission Guidelines</p>
                    </div>
                    <div className=''>
                        <p className='md:text-base text-base pl-2 text-gray-300'>
                            All submissions must be original work created during the hackathon period.
                            Submissions should include a working MVP, source code, documentation, and a presentation/demo video (max 5 minutes).
                            Use of open-source libraries and frameworks is allowed but must be credited appropriately.
                        </p>
                    </div>
                </div>
                <hr className='container mx-auto mt-12 border-gray-800'/>

                <div className='grid md:grid-cols-2 container mx-auto mt-8'>
                    <div className='col-span- mb-4'>
                        <p className='md:text-xl text-lg text-white'><span className='text-orange-500 '><ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>  Themes for Submission</p>
                    </div>
                    <div className=''>
                        <p className='md:text-base text-base pl-2 text-gray-300'>
                            AI for Public Policy Analysis: Develop AI models that can analyze large datasets to provide insights into public policies’ effectiveness. <br />
                            Cloud-Based Citizen Services: Create cloud applications that streamline citizen services like tax filing, license renewals, etc. <br />
                            AI-Driven Fraud Detection: Implement AI algorithms to detect fraudulent activities in government transactions. <br />
                            Smart City Solutions: Use AI and cloud computing to manage urban infrastructure efficiently, such as traffic management, waste disposal, etc. <br />
                            E-Governance Platforms: Develop platforms that facilitate transparent and efficient communication between government bodies and citizens.
                        </p>
                    </div>
                </div>
                <hr className='container mx-auto mt-12 border-gray-800'/>

                <div className='grid md:grid-cols-2 container mx-auto mt-8'>
                    <div className='col-span- mb-4'>
                        <p className='md:text-xl text-lg text-white'><span className='text-orange-500 '><ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>  Judging Criteria</p>
                    </div>
                    <div className=''>
                        <p className='md:text-base text-base pl-2 text-gray-300'>
                            <span className='text-lg text-orange-600'>Impact:</span> Potential impact on improving governance processes. <br />
                            <span className='text-lg text-orange-600'>Technical Execution:</span> Quality of code, use of AI/Cloud technologies. <br />
                            <span className='text-lg text-orange-600'>Feasibility:</span> Practicality of implementing the solution in real-world scenarios. <br />
                            <span className='text-lg text-orange-600'>Presentation:</span> Clarity and effectiveness of the demo video and documentation.
                        </p>
                    </div>
                </div>
                <hr className='container mx-auto mt-12 border-gray-800'/>

                <div className='grid md:grid-cols-2 container mx-auto mt-8'>
                    <div className='col-span- mb-4'>
                        <p className='md:text-xl text-lg text-white'><span className='text-orange-500 '><ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>  Timeline</p>
                    </div>
                    <div className=''>
                        <p className='md:text-base text-base pl-2 text-gray-300'>
                            <span className='text-lg text-orange-600'>Hackathon Duration:</span> 48 hours <br />
                            <span className='text-lg text-orange-600'>Submission Deadline:</span> End of the 48-hour period <br />
                            <span className='text-lg text-orange-600'>Judging Period:</span> 1 week post-submission <br />
                            <span className='text-lg text-orange-600'>Winner Announcement:</span> Within two weeks after judging ends
                        </p>
                    </div>
                </div>
                <hr className='container mx-auto mt-12 border-gray-800'/>

                <div className='grid md:grid-cols-2 container mx-auto mt-8'>
                    <div className='col-span- mb-4'>
                        <p className='md:text-xl text-lg text-white'><span className='text-orange-500 '><ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>  Prizes</p>
                    </div>
                    <div className=''>
                        <p className='md:text-base text-base pl-2 text-gray-300'>
                            <span className='text-lg text-orange-600'>Grand Prize:</span>  $1000 for the best MVP <br />
                            Certificates for all participants <br />
                        </p>
                    </div>
                </div>
                <hr className='container mx-auto mt-12 border-gray-800'/>

                <div className='grid md:grid-cols-2 container mx-auto mt-8'>
                    <div className='col-span- mb-4'>
                        <p className='md:text-xl text-lg text-white'><span className='text-orange-500 '><ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>  Code of Conduct</p>
                    </div>
                    <div className=''>
                        <p className='md:text-base text-base pl-2 text-gray-300'>
                            Participants must adhere to ethical coding practices. <br />
                            Any form of plagiarism will result in immediate disqualification. <br />
                            Respectful behavior towards other participants is mandatory.
                        </p>
                    </div>
                </div>
                <hr className='container mx-auto mt-12 border-gray-800'/>

                <div className='grid md:grid-cols-2 container mx-auto mt-8'>
                    <div className='col-span- mb-4'>
                        <p className='md:text-xl text-lg text-white'><span className='text-orange-500 '><ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>  Support & Resources</p>
                    </div>
                    <div className=''>
                        <p className='md:text-base text-base pl-2 text-gray-300'>
                        Access to cloud credits from major providers (AWS, Google Cloud, Azure). <br />
                        Mentorship sessions with industry experts during the hackathon period.
                        </p>
                    </div>
                </div>
                <hr className='container mx-auto mt-12 border-gray-800'/>

                <div className='grid md:grid-cols-2 container mx-auto mt-8'>
                    <div className='col-span- mb-4'>
                        <p className='md:text-xl text-lg text-white'><span className='text-orange-500 '><ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>  Intellectual Property Rights</p>
                    </div>
                    <div className=''>
                        <p className='md:text-base text-base pl-2 text-gray-300'>
                        Participants retain ownership of their submissions but grant organizers a non-exclusive right to showcase their projects for
                        </p>
                    </div>
                </div>
                <hr className='container mx-auto mt-12 border-gray-800'/>
            </div>

        </div>
        </>
    );
}

export default About;
