import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const App = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* First Column - Travel */}
        <div>
          <h3 className="text-xl font-bold mb-4">Travel</h3>
          <ul>
            <li>Destinations</li>
            <li>Booking Resources</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Second Column - Tour Packages & Offers */}
        <div>
          <h3 className="text-xl font-bold mb-4">Tour Packages</h3>
          <ul>
            <li>Personalised Offers</li>
            <li>Special Deals</li>
            <li>Summer Holiday</li>
          </ul>
        </div>

        {/* Third Column - About Us, FAQ, Terms */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <ul>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Fourth Column - Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p>&copy; 2025 Travel Agency. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default App;
