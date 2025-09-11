// src/context/ProfileContext.jsx
import React, { createContext, useState, useContext } from 'react';
export let role = "faculty";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@college.edu',
    phone: '+1 (555) 123-4567',
    role: 'Faculty - Mathematics Department',
    profileImage: '/avatar.png'
  });

  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
