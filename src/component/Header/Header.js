import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <h1>Web Quiz</h1>
            <nav className='nav-container'>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/statistics'>Statistics</Link>
            </nav>

        </div>
    );
};

export default Header;