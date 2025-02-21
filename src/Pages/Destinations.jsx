import React from 'react';

// Importing the image
import backgroundImage from '../assets/background_3.avif'; // Ensure the path is correct
// import ImageSlider2 from '../assets/ImageSlider_2.avif'; // Ensure the path is correct
import TajMahal from '../assets/india.webp'
import paris from '../assets/paris.jpeg'
import newYourk from '../assets/newYourk.webp'
import tokyo from '../assets/tokyo.jpeg'
import london from '../assets/london.jpeg'
import sydney from '../assets/sydney.jpeg'
import dubai from '../assets/dubai.jpeg'
import rome from '../assets/rome.jpeg'
import athens from '../assets/athens.jpeg'
import barcelona from '../assets/barcelona.jpeg'
import bangkok from '../assets/bankok.jpeg'
import istanbul from '../assets/istanbul.jpeg'
import capeTown from '../assets/capeTown.jpeg'
import moscow from '../assets/moscow.jpeg'
import mumbai from '../assets/mumbai.avif'
import cairo from '../assets/cairo.jpeg'
import seol from '../assets/seol.jpeg'
import losAngeles from '../assets/losAngeles.webp'
import rioDe from '../assets/riode.jpeg'
import vienna from '../assets/vienna.jpeg'

const DestinationPage = () => {
    const destinations = [
        { name: 'Taj Mahal', image: TajMahal },
        { name: 'Paris', image: paris },
        { name: 'New York', image: newYourk },
        { name: 'Tokyo', image: tokyo },
        { name: 'London', image: london },
        { name: 'Sydney', image: sydney },
        { name: 'Dubai', image: dubai },
        { name: 'Rome', image: rome },
        { name: 'Athens', image: athens },
        { name: 'Barcelona', image: barcelona },
        { name: 'Bangkok', image: bangkok },
        { name: 'Istanbul', image: istanbul },
        { name: 'Cape Town', image: capeTown },
        { name: 'Moscow', image: moscow },
        { name: 'Cairo', image: cairo },
        { name: 'Seoul', image: seol },
        { name: 'Los Angeles', image: losAngeles },
        { name: 'Rio de Janeiro', image: rioDe },
        { name: 'Mumbai', image: mumbai },
        { name: 'Vienna', image: vienna },
    ];

    return (
        <section
            className="bg-[#F1F8F4] py-16 px-8"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Decorative Heading with Lines */}
            <div className="flex items-center justify-center space-x-4 mb-12">
                <div className="flex-grow border-t-4 border-[#2C3930]"></div>
                <h1 className="text-5xl font-bold text-white bg-black p-6 rounded-md">
                    DESTINATIONS
                </h1>        <div className="flex-grow border-t-4 border-[#2C3930]"></div>
            </div>

            {/* Grid of Destination Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={destination.image}
                            alt={destination.name}
                            className="w-full h-80 object-cover rounded-t-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <h3 className="text-white text-xl font-semibold">{destination.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DestinationPage;
