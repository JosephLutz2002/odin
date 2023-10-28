import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
const  api = require( '../utils/api');
import axios from 'axios';
const cookies = require('../utils/cookies')
const ProfileDropdown = ({profileImage,setProfileImage}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [username, setUsername] = useState('YourUsername');
  const [password, setPassword] = useState('YourPassword');
  const [newProfileImage, setNewProfileImage] = useState(null);
  const [newProfileImageName, setNewProfileImageName] = useState(null); // Store the filename
  const imageUploadRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    api.getProfileImage()
      .then((imgUrl) => {
        if (imgUrl) {
          setProfileImage(imgUrl);
        }
      })
      .catch((error) => {
        console.error('Error fetching profile image:', error);
      });
  }, []);

  const handleSave = () => {
    console.log('Updated username:', username);
    console.log('Updated password:', password);

    if (newProfileImage) {
      console.log('Selected profile image filename:', newProfileImageName);
      api.uploadFile(newProfileImage)
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file) {
        const formData = new FormData();
        formData.append('file', file);
        try {
          const response = await axios.post(`http://127.0.0.1:5000/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${cookies.getJWTToken('access')}`
            },
          });
  
          if (response.status === 200) {
            console.log('Profile picture uploaded successfully');
          }
        } catch (error) {
          console.error('Error uploading profile picture:', error);
        }    
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewProfileImage(event.target.result);
      };

      // Set the filename
      setNewProfileImageName(file.name);

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-dropdown">
      <div className="profile-icon" onClick={() => imageUploadRef.current.click()}>
        <div className="circular-container">
          {profileImage || newProfileImage ? (
            <div className="profile-image-container">
              <img
                src={newProfileImage || profileImage}
                alt="Profile"
                className="circular-image"
              />
              <label htmlFor="imageUpload" className="pencil-icon">
                <FontAwesomeIcon icon={faPencilAlt} />
              </label>
            </div>
          ) : (
            <div className="default-profile-image">
              <img src="default-image.png" alt="Default Profile" />
              <label htmlFor="imageUpload" className="pencil-icon">
                <FontAwesomeIcon icon={faPencilAlt} />
              </label>
            </div>
          )}
          <input
            type="file"
            name="file"
            id="imageUpload"
            accept="image/*"
            ref={imageUploadRef}
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>
      <div className={`dropdown-content${isDropdownOpen ? ' open' : ''}`}>
        <div className="input-field">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
