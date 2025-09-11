import React from 'react';
import TeacherGradeChart from '../components/TeacherGradeChart';
import TeacherAttendanceChart from '../components/TeacherAttendanceChart';
import AssignmentsTable from '../components/AssignmentsTable';
import AssignedClasses from '../components/AssignedClasses';
function TeacherPage() {
    const facultyCardData = [
        {
            type: 'Total Programs',
            value: 6,
        },
        {
            type: 'Total Students',
            value: 120,
        },
        {
            type: 'Average Grade',
            value: 85,
        }
    ]
    return (
        <>
    <div className="px-0 sm:px-2 md:px-4 lg:p-6 flex flex-col gap-2 sm:gap-4 lg:gap-8">
                        {/* Dashboard Header */}

                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <TeacherGradeChart />
                    </div>
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <TeacherAttendanceChart />
                    </div>
                </div>
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="w-full lg:w-2/3 ">
                        <AssignmentsTable />
                    </div>
                    <div className="w-full lg:w-1/3 h-[650px]">
                        <AssignedClasses />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherPage;