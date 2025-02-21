import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';  

import TravelStarterKit from '../Components/TravelStarterKit';
import Footer from '../Components/Footer';
import Testimonials from '../Components/Testimonials';


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* <img 
        src="https://plus.unsplash.com/premium_photo-1673971706769-13a9499e3794?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Beautiful scenery"
        className="w-full h-auto object-cover" 
      /> */}
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Testimonials/>
        <TravelStarterKit/>
      </div>

      
    </div>
  );
};

export default Home;
