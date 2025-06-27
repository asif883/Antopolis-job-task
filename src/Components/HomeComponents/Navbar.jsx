import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between w-full'>
            <h1 className='hidden sm:flex uppercase text-3xl font-semibold text-white
            z-10'>Restaurant</h1>
             {/* Search Bar */}
            <div className="z-20 w-full md:w-1/3">
                <div className="flex items-center bg-white text-black rounded-xl px-4 py-2 w-full shadow-md">
                <FaSearch className="mr-2 text-gray-800" />
                <input
                    type="text"
                    placeholder="Search...."
                    className="w-full outline-none bg-transparent"
                />
                </div>
            </div>
        </div>
    );
};

export default Navbar;