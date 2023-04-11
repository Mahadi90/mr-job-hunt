import React, { useState } from 'react';
import { Link , NavLink } from 'react-router-dom';
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
  } from '@heroicons/react/24/solid'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState()

    return (
        <nav className="flex justify-between py-8 px-2 md:px-14 bg-gradient-to-r from-gray-300 to-gray-100">
            <div>
                <h2 className='text-3xl font-bold'><span className='text-violet-600'>MR</span>jobHub</h2>
            </div>
            <ul className='hidden lg:flex'>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/statistics'>Statistics</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/appliedjob'>Applied Job</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/blog'>Blog</NavLink>
            </ul>
            <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-8 text-violet-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        <span className='text-violet-500'>MR</span>jobHub
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-8 text-red-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/statistics'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/appliedjob'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Applied Job
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
            <button className='common-btn hidden lg:flex'>Start Applying</button>
        </nav>
    );
};

export default Header;