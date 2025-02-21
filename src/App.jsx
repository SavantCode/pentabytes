// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Correct import path
import Home from './Pages/Home'; // Correct file names for Pages
import About from './Pages/About';
import Blog from './Pages/Blog';
import Beach from './Pages/Beach';
import Destinations from './Pages/Destinations';
import Footer from './Components/Footer';
import Login from './Pages/Login'; // Correct import path
import Signup from './Pages/Signup'; // Correct import path

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/start-here" element={<Beach />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
