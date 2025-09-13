// ReportsData.jsx
export const GOOD_THRESHOLD = 80;
export const AVERAGE_THRESHOLD = 50;
export const EXCELLENT_THRESHOLD = 90;
export const FAIL_THRESHOLD = 30;

export const allPrograms = ['Pre-Engineering', 'Pre-Medical', 'Commerce', 'Arts'];
export const allSemesters = [1, 2];

export const coursesConfig = {
  'Mathematics': { maxMarks: 100, passingMarks: 33 },
  'Physics': { maxMarks: 100, passingMarks: 33 },
  'Chemistry': { maxMarks: 100, passingMarks: 33 },
  'Biology': { maxMarks: 100, passingMarks: 33 },
  'English': { maxMarks: 100, passingMarks: 33 },
  'Urdu': { maxMarks: 100, passingMarks: 33 },
  'Computer Science': { maxMarks: 100, passingMarks: 33 },
  'Economics': { maxMarks: 100, passingMarks: 33 },
  'Accounting': { maxMarks: 100, passingMarks: 33 },
  'Business Studies': { maxMarks: 100, passingMarks: 33 },
  'History': { maxMarks: 100, passingMarks: 33 },
  'Geography': { maxMarks: 100, passingMarks: 33 },
  'Psychology': { maxMarks: 100, passingMarks: 33 },
  'Sociology': { maxMarks: 100, passingMarks: 33 },
};

export const students = [
  // Pre-Engineering Students
  {
    id: 'PE21001', name: 'Alex Johnson', program: 'Pre-Engineering', semester: 1, rollNo: 'PE101',
    marks: { 'Mathematics': 92, 'Physics': 88, 'Chemistry': 85 }
  },
  {
    id: 'PE21002', name: 'Bianca Smith', program: 'Pre-Engineering', semester: 1, rollNo: 'PE102',
    marks: { 'Mathematics': 85, 'Physics': 82, 'Chemistry': 78 }
  },
  {
    id: 'PE21003', name: 'Carlos Mendez', program: 'Pre-Engineering', semester: 2, rollNo: 'PE201',
    marks: { 'Mathematics': 75, 'Physics': 68, 'Chemistry': 72 }
  },
  {
    id: 'PE21004', name: 'Diana Chen', program: 'Pre-Engineering', semester: 2, rollNo: 'PE202',
    marks: { 'Mathematics': 45, 'Physics': 35, 'Chemistry': 40 }
  },

  // Pre-Medical Students
  {
    id: 'PM21001', name: 'Ethan Wilson', program: 'Pre-Medical', semester: 1, rollNo: 'PM101',
    marks: { 'Biology': 95, 'Chemistry': 90, 'Physics': 88 }
  },
  {
    id: 'PM21002', name: 'Fiona Kim', program: 'Pre-Medical', semester: 1, rollNo: 'PM102',
    marks: { 'Biology': 82, 'Chemistry': 78, 'Physics': 85 }
  },
  {
    id: 'COM21001', name: 'George Brown', program: 'Commerce', semester: 1, rollNo: 'COM101',
    marks: { 'Accounting': 65, 'Economics': 72, 'Business Studies': 68 }
  },
  {
    id: 'COM21002', name: 'Hannah Lee', program: 'Commerce', semester: 2, rollNo: 'COM201',
    marks: { 'Accounting': 55, 'Economics': 60, 'Business Studies': 58 }
  },

  // Arts Students
  {
    id: 'ART21001', name: 'Ian Patel', program: 'Arts', semester: 1, rollNo: 'ART101',
    marks: { 'History': 94, 'Geography': 89, 'Psychology': 91 }
  },
  {
    id: 'ART21002', name: 'Julia Garcia', program: 'Arts', semester: 1, rollNo: 'ART102',
    marks: { 'History': 80, 'Geography': 85, 'Psychology': 78 }
  },
  {
    id: 'ART21003', name: 'Kevin Zhang', program: 'Arts', semester: 2, rollNo: 'ART201',
    marks: { 'History': 70, 'Geography': 65, 'Sociology': 75 }
  },
  {
    id: 'ART21004', name: 'Lily Wilson', program: 'Arts', semester: 2, rollNo: 'ART202',
    marks: { 'History': 50, 'Geography': 45, 'Sociology': 48 }
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