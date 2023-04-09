import React from 'react';

const SingleCategory = ({singleCategory}) => {

    const {categoryName, categoryLogo, jobAvailable} = singleCategory;
    return (
        <div className='bg-gray-100 p-6 py-10 rounded-lg'>
            <img className='w-14 h-14 rounded-lg' src={categoryLogo} alt="" />
            <h3 className='text-xl my-2 font-bold text-gray-700'>{categoryName}</h3>
            <p className='text-violet-400'>{jobAvailable} job are available</p>
        </div>
    );
};

export default SingleCategory;