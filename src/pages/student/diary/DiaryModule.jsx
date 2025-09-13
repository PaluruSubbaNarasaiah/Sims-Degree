// src/pages/student/diary/DiaryModule.jsx
import React, { useState, useMemo } from 'react';
import { format, parseISO } from 'date-fns';

const DiaryModule = () => {
    // Mock Student ID
    const currentStudentId = "student_S001"; 
    const [homeworkEntries, setHomeworkEntries] = useState([
        {
            id: 'hw1',
            lecturerId: 'lecturer_F123', // Assigned by lecturer F123
            date: '2025-06-27',
            homeworkItems: [
                { subject: 'Mathematics', homework: 'Complete calculus problems on derivatives and integrals (Chapter 8).' },
                { subject: 'Computer Science', homework: 'Implement data structures assignment on binary trees and hash tables.' }
            ]
        },
        {
            id: 'hw4',
            lecturerId: 'lecturer_F125', // Assigned by lecturer F125
            date: '2025-06-28', // Future date
            homeworkItems: [
                { subject: 'Physics', homework: 'Solve advanced mechanics problems on rotational dynamics.' },
                { subject: 'Economics', homework: 'Prepare market analysis report on supply and demand theory.' }
            ]
        },
    ]);

    // --- Mock data for student's enrolled classes/lecturers ---
    // This simulates the relationship: which lecturer members' homework should this student see.
    // In a real system, this would be determined by the student's actual class enrollments.
    const [studentAssociatedlecturerIds] = useState(['lecturer_F123', 'lecturer_F125']); // Student S001 gets homework from F123 and F125

    // Filter and sort homework entries for display based on the student's associated lecturers
    const displayedHomeworkEntries = useMemo(() => {
        return homeworkEntries
            .filter(entry => studentAssociatedlecturerIds.includes(entry.lecturerId)) // Only show homework from assigned lecturer
            .sort((a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime()); // Sort by date descending
    }, [homeworkEntries, studentAssociatedlecturerIds]);

    return (
    <div className="px-0 sm:px-2 md:px-4 lg:p-6 flex flex-col gap-2 sm:gap-4 lg:gap-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Homework Diary</h1>
            </div>

            {/* No tabs needed as only Homework Diary is shown */}

            {/* Content Area for Home Work Diary */}
            <div className="space-y-4">
                {displayedHomeworkEntries.length === 0 ? (
                    <div className="text-center text-gray-500 py-10">No homework assignments found from your lecturer members.</div>
                ) : (
                    <div className="space-y-4">
                        {displayedHomeworkEntries.map(entry => (
                            <div key={entry.id} className="border border-gray-200 rounded-md p-4 bg-gray-50 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-gray-500">{format(parseISO(entry.date), 'MMM dd, yyyy')}</p>
                                        {/* You might want to display the lecturer member's name here, if available */}
                                        {/* <p className="text-xs text-gray-400">Assigned by: [lecturer Name based on {entry.lecturerId}]</p> */}
                                    </div>
                                    {/* No edit/delete buttons for students */}
                                </div>
                                <div className="space-y-2 text-sm text-gray-700 mt-2">
                                    {entry.homeworkItems.map((item, idx) => (
                                        <div key={idx} className="bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                                            <p><span className="font-semibold">{item.subject}:</span> {item.homework}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default DiaryModule;