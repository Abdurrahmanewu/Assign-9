import React from 'react';
import { useLoaderData } from "react-router-dom";
import Quiz from '../Quiz/Quiz';
import './Home.css';
import logo from '../../Images/quiz.jpg'

const Home = () => {
    const quizzes = useLoaderData();
    console.log(quizzes.data);
    return (
        <div className='home-container'>
            <div>
                <img src={logo} alt="" />
                <h1>Analyze your web Skills</h1>
            </div>
            <div className='quiz-container'>
                {
                    quizzes.data.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;