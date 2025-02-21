import React, { useState } from "react";
import beach_1 from '../assets/beach_1.avif';
import beach_2 from '../assets/beach_2.avif';
import beach_3 from '../assets/beach_3.avif';
import beach_4 from '../assets/beach_4.avif';
import beach_hero from '../assets/beach_hero.jpeg';

// Example of frontend call using fetch (to send SMS)
const sendMessage = async (message) => {
  try { 
    const response = await fetch('http://localhost:3000/api/send-sms', {  // Adjusted to backend URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),  // Send the message in the request body
    });

    const data = await response.json();

    if (data.success) {
      console.log('SMS sent successfully. SID:', data.sid);
    } else {
      console.error('Error sending SMS:', data.error);
    }
  } catch (error) {
    console.error('Error sending request:', error);
  }
};

// Modify this function to call your backend API for sending SMS
const sendSmsAlert = async (beachName) => {
  // Send an SMS alert if the beach is unsafe
  if (!beachName) return;

  const message = `Warning: ${beachName} is unsafe to visit due to weather conditions.`;

  try {
    const response = await fetch('/api/send-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      console.log('SMS sent successfully');
    } else {
      console.error('Error sending SMS');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const beaches = [
  {
    name: "Sunny Beach",
    location: "Santa Monica, CA",
    openingTime: "6:00 AM",
    closingTime: "8:00 PM",
    city: "Santa Monica",
    image: beach_1,
    isSafe: true,
  },
  {
    name: "Crystal Bay",
    location: "Malibu, CA",
    openingTime: "7:00 AM",
    closingTime: "9:00 PM",
    city: "Malibu",
    image: beach_2,
    isSafe: false,
  },
  {
    name: "Palm Cove",
    location: "Florida, USA",
    openingTime: "5:00 AM",
    closingTime: "10:00 PM",
    city: "Florida",
    image: beach_3,
    isSafe: true,
  },
  {
    name: "Coral Beach",
    location: "Hawaii, USA",
    openingTime: "8:00 AM",
    closingTime: "7:00 PM",
    city: "Hawaii",
    image: beach_4,
    isSafe: true,
  },
];

const Beaches = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: `url(${beach_hero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-6xl font-bold text-white opacity-0 transition-opacity duration-1500 ease-out animate-fadeIn">
            Discover Beautiful Beaches
          </h1>
        </div>
      </div>

      {/* Beach Cards Section */}
      <div className="max-w-screen-xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-semibold text-center text-[#2C3930] mb-12">Explore Our Top Beaches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {beaches.map((beach, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl bg-white lg:w-94"
            >
              {/* Beach Image */}
              <img
                src={beach.image}
                alt={beach.name}
                className="w-full h-56 object-cover rounded-t-lg transition-all duration-500 group-hover:scale-110"
              />

              {/* Beach Information */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#2C3930]">{beach.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{beach.location}</p>

                {/* Information Structured Properly */}
                <div className="mt-6">
                  <div className="flex justify-between text-md text-gray-700 mb-2">
                    <span>Opening Time:</span>
                    <span>{beach.openingTime}</span>
                  </div>
                  <div className="flex justify-between text-md text-gray-700 mb-2">
                    <span>Closing Time:</span>
                    <span>{beach.closingTime}</span>
                  </div>
                  <div className="flex justify-between text-md text-gray-700 mb-4">
                    <span>City:</span>
                    <span>{beach.city}</span>
                  </div>
                </div>

                {/* Safety Tag */}
                <div
                  className={`mt-4 text-center py-2 px-4 text-white rounded-md font-semibold ${
                    beach.isSafe ? "bg-green-700 hover:bg-green-600" : "bg-red-700 hover:bg-red-600"
                  } transition-colors duration-300`}
                >
                  {beach.isSafe ? "Safe to Visit" : "Not Safe to Visit"}
                </div>
              </div>

              {/* Button Click for SMS Alert */}
              {!beach.isSafe && (
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <button
                    className="text-white font-bold text-xl text-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
                    onClick={() => sendSmsAlert(beach.name)}  // Trigger SMS alert for unsafe beaches
                  >
                    Warning: Unsafe Beach - Click to Alert
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beaches;
