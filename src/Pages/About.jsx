import React from 'react'
import aboutImage from "../assets/about_1.avif"  // Correct import for the .avif image
import ImageSlider from '../Components/ImageSlider'
import Line from '../Components/Line'

const About = () => {
    return (
        <div className="about-container">
            <div className="flex w-full h-screen">
                {/* Left Side: Image */}
                <div
                    className="relative w-1/2 h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutImage})`, backgroundPosition: 'center top' }}  // Top 50% of the image
                >
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <h3 className="text-white text-4xl font-bold text-center px-6">Confident travel starts at PENTATRAVELS.</h3>
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="w-1/2 p-16 flex flex-col justify-center">
                    <p className="text-2xl font-extrabold">Since 2004, PENTATRAVELS has been revolutionising the travel industry. Metasearch for travel? No one was doing it. Until we did.</p>
                    <br />
                    <br />
                    <p className="text-xl font-semibold mb-6">Together, we make it easier for everyone to experience the world.</p>
                    <p>Today, we process billions of queries across our platforms each year for travel information, helping millions of travellers around the globe make confident decisions. With every query, PENTATRAVELS searches hundreds of travel sites to show travellers the information they need to find the right flights, hotels, hire cars and holiday packages.

                        In over a decade, we've grown from a small office of 14 employees into a company of over 1,000 travel-loving teammates working across 7 international brands; PENTATRAVELSKAYA, SWOODOO, checkfelix, momondo, Cheapflights, Mundi and HotelsCombined. Together, we make it easier for everyone to experience the world.

                        In 2013, we were acquired by Booking Holdings, the world leader in online travel.</p>
                </div>
            </div>

            {/* Image Slider Component */}
            <div className="py-16">
                <Line/>
                <ImageSlider />
                <Line/>
            </div>
        </div>
    )
}

export default About;
