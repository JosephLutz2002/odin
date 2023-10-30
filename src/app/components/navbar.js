'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
const cookies = require('../utils/cookies');
const api = require('../utils/api')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ProfileDropdown from './profileMenu';
const Navbar = () => {
  const router = useRouter();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const toggleProfileDropdown = () => {
    console.log('proifle menu change')
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setProfileImage(api.getProfileImage().imgUrl)
  };
  const handleLoginButton = async () => {
    if (cookies.checkLogged()) {
      console.log('user already logged in ');
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };

  const handleHomeButton = async () => {
    router.push('/');
  };

  const handleLogOut = () => {
    cookies.clearData();
    router.push('/');
  };

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const checkCookie = () => {
      const val = cookies.checkLogged();
      setIsUserLoggedIn(!!val);
    };

    checkCookie();
    const interval = setInterval(checkCookie, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <nav className="bg-blue-500 p-4">
      <div className="max-w-4xl mx-auto flex">
        <img className="image" />

        {/* Navigation Buttons */}
        <div className="space-x-4">
          <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out" onClick={handleHomeButton}>
            Home
          </button>
          <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out" onClick={handleLoginButton}>
            Sign In
          </button>
          <button className="bg-white text-blue-500 hover-bg-blue-100 text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out">Other Projects</button>
        </div>

        <div className="flex space-x-4"> {/* Wrap the last two buttons in a flex container */}
          {isUserLoggedIn ? (
            <>
              <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out"><FontAwesomeIcon icon={faUser}  onClick={toggleProfileDropdown}/></button>
              <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out" onClick={handleLogOut}>Logout</button>
            </>
          ) : null}
        </div>
      </div>
    </nav>
    {isProfileDropdownOpen && <ProfileDropdown profileImage={profileImage} setProfileImage={setProfileImage} />}
    </div>
  );
};

export default Navbar;
