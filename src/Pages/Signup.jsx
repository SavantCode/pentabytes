import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      console.log("Signing up with", fullName, email, password);
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://example.com/travel-image.jpg")',
      }}
    >
      <div className="h-full flex items-center justify-center bg-black bg-opacity-60">
        <div className="bg-white p-10 rounded-xl shadow-lg max-w-lg w-full">
          <h2 className="text-3xl font-bold text-center text-[#2C3930] mb-8">Create an Account</h2>

          <form onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div className="mb-6">
              <label htmlFor="fullName" className="block text-lg text-[#2C3930]">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 border-2 border-[#2C3930] rounded-lg focus:outline-none focus:border-[#1a2b21] transition duration-300"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Input */}
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

            {/* Password Input */}
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

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-lg text-[#2C3930]">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border-2 border-[#2C3930] rounded-lg focus:outline-none focus:border-[#1a2b21] transition duration-300"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#2C3930] text-white font-semibold rounded-lg hover:bg-[#1a2b21] transition duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Redirect to Login Page */}
          <div className="mt-4 text-center">
            <p className="text-sm text-[#2C3930]">
              Already have an account? <a href="/login" className="text-[#1a2b21] hover:underline">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
