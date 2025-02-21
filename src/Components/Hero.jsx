import React from 'react';
import hero_home from '../assets/hero_home_2.webp'

const Hero = () => {
    return (
        <div className="relative w-full h-[600px]">
            {/* Background Image */}
            <img 
                src=  {hero_home}
                alt="Beautiful scenery"
                className="w-full h-full object-cover" 
            />
            
            {/* Overlay Content */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50">
                {/* Hero Title */}
                <div className="text-4xl font-bold mb-4">
                    Welcome to PentaTravels
                </div>

                {/* Hero Text */}
                <div className="text-xl max-w-3xl mx-auto mb-6">
                    <p>
                    Embark on Your Next Adventure – Explore stunning destinations, experience new cultures, and create unforgettable memories with every journey. Let your wanderlust guide you!
                    </p>
                </div>

                {/* Button */}
                <button className="bg-white text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
                    Click here to read more!
                </button>
            </div>
        </div>
    );
};

export default Hero;
