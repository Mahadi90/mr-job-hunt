import React from 'react';
import Lottie from "lottie-react";
import animation from '../assets/animation.json'
const Home = () => {
    return (
        <div>
            <div className='lg:flex container justify-between items-center'>
                <div>
                    <h1 className='text-7xl font-bold'>One Step Closer To Your <br /> <span className='text-violet-400'>Dream Job</span></h1>
                    <p className='my-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='common-btn'>Get Started</button>
                </div>
                <div className='h-full w-full mt-4 md:mt-0'>
                <Lottie animationData={animation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;