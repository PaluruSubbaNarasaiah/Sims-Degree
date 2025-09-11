// src/contexts/AnnouncementProvider.jsx (or src/components/AnnouncementProvider.jsx, choose your path)
import React, { useState, createContext, useContext } from 'react';

// Create a Context for announcements
const AnnouncementContext = createContext(null);

// Custom hook to use the announcement context
export const useAnnouncements = () => {
  const context = useContext(AnnouncementContext);
  if (!context) {
    throw new Error('useAnnouncements must be used within an AnnouncementProvider');
  }
  return context;
};

const AnnouncementProvider = ({ children }) => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 'ann-001',
      title: 'Semester Examination Schedule Released',
      content: 'The final semester examination schedule for all undergraduate and postgraduate programs has been published. Students can check their exam dates on the college portal. Exam hall tickets will be available from next week.',
      target: ['students', 'faculty'],
      startDate: '2025-06-19',
      endDate: '2025-07-15',
      status: 'active',
      createdAt: '2025-06-18T10:30:00Z'
    },
    {
      id: 'ann-002',
      title: 'Annual College Fest - Registration Open',
      content: 'Registration is now open for our annual college cultural fest "Spectrum 2025". Students can participate in various events including dance, music, drama, and technical competitions. Last date for registration: June 30th.',
      target: ['students', 'alumni'],
      startDate: '2025-06-19',
      endDate: '2025-06-30',
      status: 'active',
      createdAt: '2025-06-17T14:20:00Z'
    }
  ]);

  const handleAddAnnouncement = (newAnn) => {
    setAnnouncements(prev => [...prev, newAnn]);
  };

  const handleUpdateAnnouncement = (updatedAnn) => {
    setAnnouncements(prev => prev.map(a => a.id === updatedAnn.id ? updatedAnn : a));
  };

  const handleDeleteAnnouncement = (id) => {
    setAnnouncements(prev => prev.filter(a => a.id !== id));
  };

  return (
    <AnnouncementContext.Provider value={{ announcements, handleAddAnnouncement, handleUpdateAnnouncement, handleDeleteAnnouncement }}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export default AnnouncementProvider;