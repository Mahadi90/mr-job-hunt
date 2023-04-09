import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="flex justify-between py-8 px-2 md:px-14">
            <div>
                <h2 className='text-3xl font-bold'>MRjobHub</h2>
            </div>
            <ul>
                <Link className='text-violet-600 mx-6' to='/'>Home</Link>
                <Link className='text-violet-600 mx-6' to='/statistics'>Statistics</Link>
                <Link className='text-violet-600 mx-6' to='/appliedjob'>Applied Job</Link>
                <Link className='text-violet-600 mx-6' to='/blog'>Blog</Link>
            </ul>
            <button className='common-btn'>Start Applying</button>
        </nav>
    );
};

export default Header;