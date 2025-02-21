import React, { useState } from 'react';
import backgroundImage from '../assets/background_1.avif'; // Import your background image

const TravelStarterKit = () => {
  // State to hold the form inputs
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the inputs to the console
    console.log("Form Submitted:", { firstName, email });
    // Here you would send the form data to your backend or an API
  };

  return (
    <section className="py-16 px-8 bg-[#F1F8F4]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 flex-col-reverse md:flex-row">
        {/* Form Section */}
        <div className="w-full md:w-1/2 text-center md:text-left animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-4xl font-bold text-[#2C3930] mb-4">GET YOUR FREE TRAVEL STARTER KIT</h2>
          <p className="text-xl text-[#6C7C6B] mb-8">
            Enter your email to get a step-by-step planning checklist, packing list, my best travel tips, and a ton of other travel tips so you can plan your trip like a pro!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="px-4 py-2 rounded-md text-gray-700 border-2 border-[#2C3930] focus:outline-none focus:ring-2 focus:ring-[#2C3930] transition-all duration-300"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-md text-gray-700 border-2 border-[#2C3930] focus:outline-none focus:ring-2 focus:ring-[#2C3930] transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 mt-4 bg-[#2C3930] text-white font-semibold rounded-md transition-colors hover:bg-[#A5C2B4] focus:outline-none focus:ring-2 focus:ring-[#A5C2B4]"
            >
              Send Me Tips!
            </button>
          </form>
        </div>

        {/* Image Section with Overlay */}
        <div className="w-full md:w-1/2 h-[350px] md:h-[500px] bg-cover bg-center rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-1s"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          {/* Text Overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-white text-4xl font-bold">Travel More!</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelStarterKit;
