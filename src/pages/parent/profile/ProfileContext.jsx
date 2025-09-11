// src/context/ProfileContext.jsx
import React, { createContext, useState, useContext } from 'react';
export let role = "parent";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    name: 'Kushwinth Kumar',
    email: 'kushwinthkumar@gmail.com',
    phone: '+1 (555) 123-4567',
    role: 'Parent',
    profileImage: '/avatar.png',
    // New field for parent profile:
    parentId: 'PAR001' // Example Parent ID
  });

  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);