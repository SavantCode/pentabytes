import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import SearchBar from './SearchBar'; // Import SearchBar component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white flex justify-between items-center px-8 py-6 shadow-lg fixed w-full z-10 top-0 left-0">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <div className="text-white font-bold text-3xl">
          PENTATRAVELS
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-grow flex justify-center">
        <SearchBar />
      </div>

      {/* Desktop Navigation Menu */}
      <div className="hidden md:flex space-x-10">
        <ul className="flex space-x-10">
          <li className="text-lg hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out">
            <Link to="/about">About</Link>
          </li>
          <li className="text-lg hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="text-lg hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out">
            <Link to="/start-here">Beaches</Link>
          </li>
          <li className="text-lg hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out">
            <Link to="/destinations">Destinations</Link>
          </li>
          <li className="text-lg hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out">
            <Link
              to="/login"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white py-6 px-8">
          <ul className="space-y-6">
            <li className="text-lg hover:text-gray-400 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg hover:text-gray-400 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="text-lg hover:text-gray-400 cursor-pointer">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="text-lg hover:text-gray-400 cursor-pointer">
              <Link to="/start-here">Start Here</Link>
            </li>
            <li className="text-lg hover:text-gray-400 cursor-pointer">
              <Link to="/destinations">Destinations</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
