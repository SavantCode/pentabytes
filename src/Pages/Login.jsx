import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
    // Add your login logic here
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://example.com/travel-image.jpg")', // Replace with actual image
      }}
    >
      <div className="h-full flex items-center justify-center bg-black bg-opacity-60">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-center text-[#2C3930] mb-6">Welcome to PentaTravels</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg text-[#2C3930]">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border-2 border-[#2C3930] rounded-lg focus:outline-none focus:border-[#1a2b21] transition duration-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-lg text-[#2C3930]">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border-2 border-[#2C3930] rounded-lg focus:outline-none focus:border-[#1a2b21] transition duration-300"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center text-sm text-[#2C3930]">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-[#1a2b21] hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#2C3930] text-white font-semibold rounded-lg hover:bg-[#1a2b21] transition duration-300"
            >
              Log In
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-[#2C3930]">
              Don't have an account? <a href="/signup" className="text-[#1a2b21] hover:underline">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
