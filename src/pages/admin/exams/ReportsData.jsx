// --- Constants for Grade Thresholds ---
export const GOOD_THRESHOLD = 80;    // Marks >= 80%
export const AVERAGE_THRESHOLD = 50; // Marks >= 50% and < 80%
export const POOR_THRESHOLD = 0;     // Marks < 50% (assuming marks can't be negative)

// --- Predefined Mock Data ---
const predefinedExams = [
  // Year 1 Exams
  { examId: 'EXM0101', examName: 'Calculus I', class: 'Year 1', subject: 'Mathematics', date: '2025-06-15', time: '10:00 AM', duration: 120, maxMarks: 100, status: 'Completed', roomNo: 'Hall A', examiner: 'Dr. Smith' },
  { examId: 'EXM0102', examName: 'Physics I', class: 'Year 1', subject: 'Physics', date: '2025-06-17', time: '10:00 AM', duration: 120, maxMarks: 100, status: 'Completed', roomNo: 'Hall B', examiner: 'Dr. Johnson' },
  { examId: 'EXM0103', examName: 'Programming Fundamentals', class: 'Year 1', subject: 'Computer Science', date: '2025-06-19', time: '10:00 AM', duration: 180, maxMarks: 100, status: 'Completed', roomNo: 'Lab 1', examiner: 'Prof. Wilson' },
  // Year 2 Exams
  { examId: 'EXM0201', examName: 'Calculus II', class: 'Year 2', subject: 'Mathematics', date: '2025-06-16', time: '10:00 AM', duration: 120, maxMarks: 100, status: 'Completed', roomNo: 'Hall A', examiner: 'Dr. Smith' },
  { examId: 'EXM0202', examName: 'Physics II', class: 'Year 2', subject: 'Physics', date: '2025-06-18', time: '10:00 AM', duration: 120, maxMarks: 100, status: 'Completed', roomNo: 'Hall B', examiner: 'Dr. Johnson' },
  { examId: 'EXM0203', examName: 'Data Structures', class: 'Year 2', subject: 'Computer Science', date: '2025-06-20', time: '10:00 AM', duration: 180, maxMarks: 100, status: 'Completed', roomNo: 'Lab 2', examiner: 'Prof. Wilson' },
];

const predefinedStudents = [
  // Year 1 Students - Computer Science Department
  { id: 'CS01001', name: 'Alice Johnson', class: 'Year 1', section: 'Computer Science', rollNo: 'CS2024001' },
  { id: 'CS01002', name: 'Bob Smith', class: 'Year 1', section: 'Computer Science', rollNo: 'CS2024002' },
  { id: 'CS01003', name: 'Carol Davis', class: 'Year 1', section: 'Computer Science', rollNo: 'CS2024003' },
  { id: 'CS01004', name: 'David Wilson', class: 'Year 1', section: 'Computer Science', rollNo: 'CS2024004' },
  { id: 'CS01005', name: 'Emma Brown', class: 'Year 1', section: 'Computer Science', rollNo: 'CS2024005' },
  // Year 1 Students - B.com Finance Department
  { id: 'BC01001', name: 'Frank Miller', class: 'Year 1', section: 'B.com Finance', rollNo: 'EE2024001' },
  { id: 'BC01002', name: 'Grace Taylor', class: 'Year 1', section: 'B.com Finance', rollNo: 'EE2024002' },
  { id: 'EE01003', name: 'Henry Anderson', class: 'Year 1', section: 'B.com Finance', rollNo: 'EE2024003' },
  { id: 'EE01004', name: 'Ivy Thomas', class: 'Year 1', section: 'B.com Finance', rollNo: 'EE2024004' },
  { id: 'EE01005', name: 'Jack Martinez', class: 'Year 1', section: 'B.com Finance', rollNo: 'EE2024005' },
  // Year 2 Students - Computer Science Department
  { id: 'CS02001', name: 'Kate Garcia', class: 'Year 2', section: 'Computer Science', rollNo: 'CS2023001' },
  { id: 'CS02002', name: 'Liam Rodriguez', class: 'Year 2', section: 'Computer Science', rollNo: 'CS2023002' },
  { id: 'CS02003', name: 'Mia Lopez', class: 'Year 2', section: 'Computer Science', rollNo: 'CS2023003' },
  { id: 'CS02004', name: 'Noah Lee', class: 'Year 2', section: 'Computer Science', rollNo: 'CS2023004' },
  { id: 'CS02005', name: 'Olivia Walker', class: 'Year 2', section: 'Computer Science', rollNo: 'CS2023005' },
  // Year 2 Students - B.com Finance Department
  { id: 'EE02001', name: 'Paul Hall', class: 'Year 2', section: 'B.com Finance', rollNo: 'EE2023001' },
  { id: 'EE02002', name: 'Quinn Allen', class: 'Year 2', section: 'B.com Finance', rollNo: 'EE2023002' },
  { id: 'EE02003', name: 'Ruby Young', class: 'Year 2', section: 'B.com Finance', rollNo: 'EE2023003' },
  { id: 'EE02004', name: 'Sam King', class: 'Year 2', section: 'B.com Finance', rollNo: 'EE2023004' },
  { id: 'EE02005', name: 'Tina Wright', class: 'Year 2', section: 'B.com Finance', rollNo: 'EE2023005' },
];

const predefinedStudentGrades = [
  // Year 1 CS Students Grades
  { examId: 'EXM0101', studentId: 'CS01001', marks: 85 },
  { examId: 'EXM0102', studentId: 'CS01001', marks: 78 },
  { examId: 'EXM0103', studentId: 'CS01001', marks: 92 },
  { examId: 'EXM0101', studentId: 'CS01002', marks: 72 },
  { examId: 'EXM0102', studentId: 'CS01002', marks: 68 },
  { examId: 'EXM0103', studentId: 'CS01002', marks: 88 },
  { examId: 'EXM0101', studentId: 'CS01003', marks: 90 },
  { examId: 'EXM0102', studentId: 'CS01003', marks: 85 },
  { examId: 'EXM0103', studentId: 'CS01003', marks: 95 },
  { examId: 'EXM0101', studentId: 'CS01004', marks: 65 },
  { examId: 'EXM0102', studentId: 'CS01004', marks: 70 },
  { examId: 'EXM0103', studentId: 'CS01004', marks: 75 },
  { examId: 'EXM0101', studentId: 'CS01005', marks: 45 },
  { examId: 'EXM0102', studentId: 'CS01005', marks: 50 },
  { examId: 'EXM0103', studentId: 'CS01005', marks: 55 },
  // Year 1 EE Students Grades
  { examId: 'EXM0101', studentId: 'EE01001', marks: 80 },
  { examId: 'EXM0102', studentId: 'EE01001', marks: 88 },
  { examId: 'EXM0103', studentId: 'EE01001', marks: 65 },
  { examId: 'EXM0101', studentId: 'EE01002', marks: 75 },
  { examId: 'EXM0102', studentId: 'EE01002', marks: 82 },
  { examId: 'EXM0103', studentId: 'EE01002', marks: 70 },
  { examId: 'EXM0101', studentId: 'EE01003', marks: 60 },
  { examId: 'EXM0102', studentId: 'EE01003', marks: 65 },
  { examId: 'EXM0103', studentId: 'EE01003', marks: 58 },
  { examId: 'EXM0101', studentId: 'EE01004', marks: 85 },
  { examId: 'EXM0102', studentId: 'EE01004', marks: 90 },
  { examId: 'EXM0103', studentId: 'EE01004', marks: 78 },
  { examId: 'EXM0101', studentId: 'EE01005', marks: 40 },
  { examId: 'EXM0102', studentId: 'EE01005', marks: 45 },
  { examId: 'EXM0103', studentId: 'EE01005', marks: 42 },
  // Year 2 CS Students Grades
  { examId: 'EXM0201', studentId: 'CS02001', marks: 88 },
  { examId: 'EXM0202', studentId: 'CS02001', marks: 85 },
  { examId: 'EXM0203', studentId: 'CS02001', marks: 92 },
  { examId: 'EXM0201', studentId: 'CS02002', marks: 75 },
  { examId: 'EXM0202', studentId: 'CS02002', marks: 78 },
  { examId: 'EXM0203', studentId: 'CS02002', marks: 82 },
  { examId: 'EXM0201', studentId: 'CS02003', marks: 95 },
  { examId: 'EXM0202', studentId: 'CS02003', marks: 90 },
  { examId: 'EXM0203', studentId: 'CS02003', marks: 98 },
  { examId: 'EXM0201', studentId: 'CS02004', marks: 68 },
  { examId: 'EXM0202', studentId: 'CS02004', marks: 72 },
  { examId: 'EXM0203', studentId: 'CS02004', marks: 75 },
  { examId: 'EXM0201', studentId: 'CS02005', marks: 50 },
  { examId: 'EXM0202', studentId: 'CS02005', marks: 55 },
  { examId: 'EXM0203', studentId: 'CS02005', marks: 60 },
  // Year 2 EE Students Grades
  { examId: 'EXM0201', studentId: 'EE02001', marks: 82 },
  { examId: 'EXM0202', studentId: 'EE02001', marks: 88 },
  { examId: 'EXM0203', studentId: 'EE02001', marks: 70 },
  { examId: 'EXM0201', studentId: 'EE02002', marks: 78 },
  { examId: 'EXM0202', studentId: 'EE02002', marks: 85 },
  { examId: 'EXM0203', studentId: 'EE02002', marks: 65 },
  { examId: 'EXM0201', studentId: 'EE02003', marks: 65 },
  { examId: 'EXM0202', studentId: 'EE02003', marks: 70 },
  { examId: 'EXM0203', studentId: 'EE02003', marks: 62 },
  { examId: 'EXM0201', studentId: 'EE02004', marks: 90 },
  { examId: 'EXM0202', studentId: 'EE02004', marks: 95 },
  { examId: 'EXM0203', studentId: 'EE02004', marks: 85 },
  { examId: 'EXM0201', studentId: 'EE02005', marks: 45 },
  { examId: 'EXM0202', studentId: 'EE02005', marks: 48 },
  { examId: 'EXM0203', studentId: 'EE02005', marks: 52 },
];

// Function to generate random marks
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate data for Years 3 and 4
for (let year = 3; year <= 4; year++) {
  const yearStr = year.toString().padStart(2, '0');
  
  // Add exams for this year
  predefinedExams.push(
    { examId: `EXM${yearStr}01`, examName: `Advanced Mathematics ${year}`, class: `Year ${year}`, subject: 'Mathematics', date: '2025-07-01', time: '10:00 AM', duration: 120, maxMarks: 100, status: 'Completed', roomNo: 'Hall A', examiner: 'Dr. Smith' },
    { examId: `EXM${yearStr}02`, examName: `Advanced Physics ${year}`, class: `Year ${year}`, subject: 'Physics', date: '2025-07-03', time: '10:00 AM', duration: 120, maxMarks: 100, status: 'Completed', roomNo: 'Hall B', examiner: 'Dr. Johnson' },
    { examId: `EXM${yearStr}03`, examName: `Advanced Computing ${year}`, class: `Year ${year}`, subject: 'Computer Science', date: '2025-07-05', time: '10:00 AM', duration: 180, maxMarks: 100, status: 'Completed', roomNo: 'Lab 3', examiner: 'Prof. Wilson' }
  );
  
  // Add students for this year
  for (let i = 1; i <= 5; i++) {
    predefinedStudents.push(
      { id: `CS${yearStr}${i.toString().padStart(3, '0')}`, name: `CS Student ${year}-${i}`, class: `Year ${year}`, section: 'Computer Science', rollNo: `CS202${4-year+1}${i.toString().padStart(3, '0')}` },
      { id: `EE${yearStr}${i.toString().padStart(3, '0')}`, name: `EE Student ${year}-${i}`, class: `Year ${year}`, section: 'B.com Finance', rollNo: `EE202${4-year+1}${i.toString().padStart(3, '0')}` }
    );
  }
  
  // Add grades for this year
  const yearStudents = predefinedStudents.filter(s => s.class === `Year ${year}`);
  const yearExams = predefinedExams.filter(e => e.class === `Year ${year}`);
  
  yearStudents.forEach(student => {
    yearExams.forEach(exam => {
      predefinedStudentGrades.push({
        examId: exam.examId,
        studentId: student.id,
        marks: getRandomInt(35, 95)
      });
    });
  });
}

// Main export function
export const generateSchoolData = () => {
  return {
    allGeneratedExams: predefinedExams,
    allGeneratedStudents: predefinedStudents,
    allGeneratedGrades: predefinedStudentGrades
  };
};