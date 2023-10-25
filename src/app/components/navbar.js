import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* Logo or Branding (You can replace with your own logo) */}
        <img
        className="image"
      />

        {/* Navigation Buttons */}
        <div className="space-x-4">
          <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out">Home</button>
          <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out">Sign In</button>
          <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out">About</button>
          <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out">
          Create Account
        </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
