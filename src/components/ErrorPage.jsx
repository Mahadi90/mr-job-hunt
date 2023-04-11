import React from 'react';
import Lottie from "lottie-react";
import errorpage from "../assets/404 error page.json";

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
           
            <Lottie className='w-2/5 h-2/5' animationData={errorpage} loop={true} />
            <h3 className='text-3xl font-bold text-gray-700'>Opps! This page was not Found</h3>
        </div>
    );
};

export default ErrorPage;