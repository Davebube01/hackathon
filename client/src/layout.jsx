import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';

const Layout = () => {
    return (
        <div className=' bg-gray-900 '>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
