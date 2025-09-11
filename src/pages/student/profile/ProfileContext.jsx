// src/context/ProfileContext.jsx
import React, { createContext, useState, useContext } from 'react';
export let role = "student";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    name: 'Kushwinth Kumar',
    role: 'Student',
    lastLogin: '2025-06-20 10:30 AM',
    college: 'Bengaluru Degree College',
    profileImage: '/avatar.png',
    studentId: 'STU00123',
    course: 'B.Sc Computer Science',
    semester: '3rd Semester',
    section: 'B',
    classFacultyId: 'FAC005',
    classFacultyName: 'Dr. Sharma',
    parentId: 'PAR001',
    parentName: 'Mr. & Mrs. Kumar'
  });

  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);