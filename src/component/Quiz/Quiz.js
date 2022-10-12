import React from 'react';
import './Quiz.css';

const Quiz = ({ quiz }) => {
    const { logo, name } = quiz;
    return (
        <div className='quiz-box'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <button>Start Practice</button>
        </div>
    );
};

export default Quiz;