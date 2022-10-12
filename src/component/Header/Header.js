import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../../Images/quiz.jpg';

const Header = () => {
    return (
        <div className='header-container'>
            <h1>Web Quiz</h1>
            <nav className='nav-container'>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/statistics'>Statistics</Link>
            </nav>
            {/* <img src={logo} alt="" /> */}
        </div>
    );
};

export default Header;