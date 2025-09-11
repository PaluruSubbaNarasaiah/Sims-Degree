// ReportsData.jsx
export const GOOD_THRESHOLD = 80;
export const AVERAGE_THRESHOLD = 50;
export const EXCELLENT_THRESHOLD = 90;
export const FAIL_THRESHOLD = 30;

export const allPrograms = ['B.Sc. Computer Science', 'B.Com', 'B.A. History'];
export const allSemesters = [1, 2, 3, 4, 5, 6];

export const coursesConfig = {
  'Intro to Programming': { maxMarks: 100, passingMarks: 40 },
  'Data Structures': { maxMarks: 100, passingMarks: 40 },
  'Algorithms': { maxMarks: 100, passingMarks: 40 },
  'Database Systems': { maxMarks: 100, passingMarks: 40 },
  'Financial Accounting': { maxMarks: 100, passingMarks: 40 },
  'Business Law': { maxMarks: 100, passingMarks: 40 },
  'Microeconomics': { maxMarks: 100, passingMarks: 40 },
  'Corporate Accounting': { maxMarks: 100, passingMarks: 40 },
  'Macroeconomics': { maxMarks: 100, passingMarks: 40 },
  'Modern History': { maxMarks: 100, passingMarks: 40 },
  'Ancient Civilizations': { maxMarks: 100, passingMarks: 40 },
  'Historiography': { maxMarks: 100, passingMarks: 40 },
  'World History': { maxMarks: 100, passingMarks: 40 },
  'Indian History': { maxMarks: 100, passingMarks: 40 },
};

export const students = [
  // B.Sc. Computer Science Students
  {
    id: 'CS21001', name: 'Alex Johnson', program: 'B.Sc. Computer Science', semester: 3, rollNo: 'CS301',
    marks: { 'Intro to Programming': 92, 'Data Structures': 88, 'Financial Accounting': 75 }
  },
  {
    id: 'CS21002', name: 'Bianca Smith', program: 'B.Sc. Computer Science', semester: 3, rollNo: 'CS302',
    marks: { 'Intro to Programming': 85, 'Data Structures': 82, 'Business Law': 78 }
  },
  {
    id: 'CS21003', name: 'Carlos Mendez', program: 'B.Sc. Computer Science', semester: 4, rollNo: 'CS401',
    marks: { 'Data Structures': 75, 'Algorithms': 68, 'Database Systems': 72 }
  },
  {
    id: 'CS21004', name: 'Diana Chen', program: 'B.Sc. Computer Science', semester: 4, rollNo: 'CS402',
    marks: { 'Data Structures': 45, 'Algorithms': 35, 'Database Systems': 25 }
  },

  // B.Com Students
  {
    id: 'COM21001', name: 'Ethan Wilson', program: 'B.Com', semester: 1, rollNo: 'COM101',
    marks: { 'Financial Accounting': 95, 'Business Law': 90, 'Microeconomics': 88 }
  },
  {
    id: 'COM21002', name: 'Fiona Kim', program: 'B.Com', semester: 1, rollNo: 'COM102',
    marks: { 'Financial Accounting': 82, 'Business Law': 78, 'Microeconomics': 85 }
  },
  {
    id: 'COM21003', name: 'George Brown', program: 'B.Com', semester: 2, rollNo: 'COM201',
    marks: { 'Corporate Accounting': 65, 'Macroeconomics': 72, 'Business Law': 68 }
  },
  {
    id: 'COM21004', name: 'Hannah Lee', program: 'B.Com', semester: 2, rollNo: 'COM202',
    marks: { 'Corporate Accounting': 35, 'Macroeconomics': 40, 'Business Law': 28 }
  },

  // B.A. History Students
  {
    id: 'HIS21001', name: 'Ian Patel', program: 'B.A. History', semester: 5, rollNo: 'HIS501',
    marks: { 'Modern History': 94, 'Ancient Civilizations': 89, 'Historiography': 91 }
  },
  {
    id: 'HIS21002', name: 'Julia Garcia', program: 'B.A. History', semester: 5, rollNo: 'HIS502',
    marks: { 'Modern History': 80, 'Ancient Civilizations': 85, 'Historiography': 78 }
  },
  {
    id: 'HIS21003', name: 'Kevin Zhang', program: 'B.A. History', semester: 6, rollNo: 'HIS601',
    marks: { 'World History': 70, 'Indian History': 65, 'Historiography': 75 }
  },
  {
    id: 'HIS21004', name: 'Lily Wilson', program: 'B.A. History', semester: 6, rollNo: 'HIS602',
    marks: { 'World History': 40, 'Indian History': 30, 'Historiography': 25 }
  },
];

export const getStudentGradeCategory = (percentage) => {
  if (percentage >= EXCELLENT_THRESHOLD) {
    return 'Excellent';
  } else if (percentage >= GOOD_THRESHOLD) {
    return 'Good';
  } else if (percentage >= AVERAGE_THRESHOLD) {
    return 'Average';
  } else {
    return 'Poor';
  }
};