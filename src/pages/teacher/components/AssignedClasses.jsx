// src/components/AssignedClasses.jsx
import React from "react";
import { BookOpen, Tag, Hash } from 'lucide-react'; // Importing icons

function AssignedClasses() {
  // Mock data for assigned courses directly within the component
  const courses = [
    {
      id: 'crs1',
      subject: 'Linear Algebra',
      course: 'B.Sc Computer Science',
      section: 'A'
    },
    {
      id: 'crs2',
      subject: 'Quantum Mechanics',
      course: 'B.Sc Physics',
      section: 'B'
    },
    {
      id: 'crs3',
      subject: 'Calculus',
      course: 'B.Sc Mathematics',
      section: 'C'
    },
    {
      id: 'crs4',
      subject: 'Business Economics',
      course: 'B.Com',
      section: 'B'
    },
    {
        id: 'crs5',
        subject: 'Applied Statistics',
        course: 'B.Sc Statistics',
        section: 'A'
    },
    {
        id: 'crs6',
        subject: 'Academic Writing',
        course: 'M.A English',
        section: 'B'
    },
    {
        id: 'crs7',
        subject: 'Modern History',
        course: 'B.A History',
        section: 'C'
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <BookOpen size={24} className="text-purple-600" /> Assigned Courses
      </h2>

      {courses && courses.length > 0 ? (
        <div className="flex flex-col gap-3 overflow-y-auto pr-2">
          {courses.map((cls) => (
            <div
              key={cls.id}
              className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center transition-all duration-200 hover:shadow-md"
            >
              <div className="flex-grow">
                <p className="text-sm font-medium text-blue-700 mb-1">
                  <span className="font-bold">{cls.subject}</span>
                </p>
                <div className="flex items-center text-gray-700 text-sm">
                  <Tag size={16} className="text-gray-500 mr-1" />
                  Course: <span className="font-semibold ml-1">{cls.course}</span>
                  <Hash size={16} className="text-gray-500 ml-3 mr-1" />
                  Section: <span className="font-semibold ml-1">{cls.section}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
          <BookOpen size={40} className="mb-3 text-gray-400" />
          <p className="text-md font-medium">No courses assigned yet.</p>
        </div>
      )}
    </div>
  );
}

export default AssignedClasses;