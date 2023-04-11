import React, { useState } from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const SingleFeature = ({singleFeature}) => {
    

const {companyLogo, jobTitle, companyName, location, remoteorOnsite, fullTimeOrPartTime, salary,id} = singleFeature;

    return (
        <div className='mx-auto border-2 rounded-lg p-4 px-6 w-full'>
            <img className='w-48 h-24 rounded-lg' src={companyLogo} alt="" />
            <h2 className='text-xl my-2 font-bold text-gray-800'>{jobTitle}</h2>
            <p className='text-gray-500 font-semibold'>{companyName}</p>
            <div className='flex gap-4 my-2'>
                <button className='border border-violet-400 px-2 rounded text-violet-500 font-semibold'>{remoteorOnsite}</button>
                <button className='border border-violet-400 px-2 rounded text-violet-500 font-semibold'>{fullTimeOrPartTime}</button>
            </div>
            <div className='flex gap-6 my-2 mt-4 text-gray-500 font-semibold'>
                <p className='flex'><MapPinIcon className="h-6 w-6 text-gray-400 mr-2" />{location}</p>
                <p className='flex'><CurrencyDollarIcon className="h-6 w-6 text-gray-400 mr-2" />{salary}</p>
            </div>
           <Link to={`/${id}`}><button className='common-btn my-2'>View Details</button></Link>
       
           
        </div>
    );
};

export default SingleFeature;