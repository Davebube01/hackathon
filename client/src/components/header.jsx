import React from 'react';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [iconName, setIconName] = useState('menu-outline')

    // for menu bar on small screen and the icon to change on click
    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        setIconName(mobileMenuOpen ? 'menu-outline' : 'close-outline')
    }

    // for the navbar transparent and colored
    useEffect(() => {
        const handleScroll = () =>{
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }
        // handle Scroll
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <>
        <header className={`font-[poppins] fixed w-full inset-x-0 top-0 left-0 py-2 md:px-8 px-1 h-16 transition-colors duration200 ease-in-out ${scrolled ? 'bg-gray-900' : 'bg-gray-900'}`}>
            <nav className='flex items-center justify-between ' aria-label='Global'>
                <div className='p-3'>
                <Link to="/">
                        <img src="" alt=""  />
                        <h4 className={`${scrolled ? 'text-white' : 'text-grey-700'} leading-7 font-semibold italic text-lg text-white`}>EDSINE TECH</h4>
                    </Link>
                </div>
                <div className=''>
                    <button
                        type='button'
                        className='flex md:hidden -m-2.5 inline-flex items-center text-white text-3xl justify-center rounded-md p-3 text-grey-700'
                        onClick={toggleMenu} 
                        aria-controls='header-menu'
                        aria-expanded={mobileMenuOpen}
                        aria-label='menu-button'
                    >
                        <span ><ion-icon name={iconName} className="" ></ion-icon></span>
                    </button>
                    <div id="header-menu" className={`${mobileMenuOpen ? 'block flex-col' : 'hidden'}  flex md:flex md:gap-x-12 justify-center md:static md:min-h-fit md:w-auto absolute min-h-[40vh] w-[50%] ml-2 rounded-lg right-0 mr-4 top-[4.5rem] item-center px-5 bg-gray-700 md:bg-transparent p-1 z-50`}>
                        <ul className='flex flex-col md:flex-row gap-12 md:items-center md:gap-[4vw]'>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) => `${isActive ? "text-gray-300 hover:text-pink-600 " : "text-gray-300 hover:text-pink-600"} $ font-semibold leading-6 `}
                                    onClick={toggleMenu} 
                                >
                                    Home
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) => `${isActive ? "text-pink-500 hover:text-pink-600 " : "text-gray-300 hover:text-white" } $ font-semibold leading-6 `}
                                    onClick={toggleMenu} 
                                >
                                    About
                                </NavLink>
                            </li> */}
                            {/* <li>
                                <NavLink
                                    to="/sponsor"
                                    className={({isActive}) => `${isActive ? "text-orange-600 hover:text-orange-500  " : "text-gray-300 hover:text-white"} $ font-semibold leading-6 `}
                                    onClick={toggleMenu} 
                                >
                                    Sponsor
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink
                                    to="/register"
                                    className={({isActive}) => `${isActive ? "text-pink-600 hover:bg-pink-500 md:text-white " : "text-gray-300 hover:text-white"} $ font-semibold leading-6 md:px-3 md:py-1 md:rounded  md:bg-pink-500`}
                                    onClick={toggleMenu} 
                                >
                                    Register
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </header>
        </>
    );
}

export default Header;
