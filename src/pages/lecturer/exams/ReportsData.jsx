// ReportsData.jsx

export const GOOD_THRESHOLD = 80;
export const AVERAGE_THRESHOLD = 50;
export const POOR_THRESHOLD = 0; // Keeping this as 0, as percentages below AVERAGE_THRESHOLD will fall here
export const FAIL_THRESHOLD = 30; // New threshold for a more explicit 'Fail' or 'Very Poor' within 'Poor'

export const lecturerClasses = ['B.Sc Computer Science', 'B.Sc Physics', 'B.Com'];

// Subject configuration with max marks (initial values).
// This will be treated as the default if no updates are made.
export const subjectsConfig = {
  'Computer Science': { maxMarks: 100 },
  'Mathematics': { maxMarks: 100 },
  'Physics': { maxMarks: 100 },
  'Statistics': { maxMarks: 80 },
  'English': { maxMarks: 70 }
};

export const students = [
  {
    id: 'S001',
    name: 'Kuswinth',
    class: 'B.Sc Computer Science',
    section: 'A',
    rollNo: '2023CSC001',
    marks: {
      'Computer Science': 85,
      'Mathematics': 86,
      'Physics': 76,
      'Statistics': 62,
      'English': 58
    }
  },
  {
    id: 'S002',
    name: 'Arjun',
    class: 'B.Sc Computer Science',
    section: 'A',
    rollNo: '2023CSC002',
    marks: {
      'Computer Science': 49,
      'Mathematics': 82,
      'Physics': 25,
      'Statistics': 35,
      'English': 55
    }
  },
  {
    id: 'S003',
    name: 'Priya',
    class: 'B.Sc Physics',
    section: 'A',
    rollNo: '2023PHY001',
    marks: {
      'Computer Science': 54,
      'Mathematics': 28,
      'Physics': 79,
      'Statistics': 49,
      'English': 61
    }
  },
  {
    id: 'S004',
    name: 'Rahul',
    class: 'B.Com',
    section: 'A',
    rollNo: '2023COM001',
    marks: {
      'Computer Science': 47,
      'Mathematics': 78,
      'Physics': 68,
      'Statistics': 42,
      'English': 22
    }
  },
  {
    id: 'S005',
    name: 'Ananya',
    class: 'B.Sc Computer Science',
    section: 'B',
    rollNo: '2023CSC003',
    marks: {
      'Computer Science': 29,
      'Mathematics': 84,
      'Physics': 74,
      'Statistics': 45,
      'English': 57
    }
  },
  {
    id: 'S006',
    name: 'Vikram',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A06',
    marks: {
      'Science': 71,
      'Social Studies': 43,
      'Mathematics': 81,
      'English': 54,
      'Computer Science': 48
    }
  },
  {
    id: 'S007',
    name: 'Divya',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A07',
    marks: {
      'Science': 77,
      'Social Studies': 48,
      'Mathematics': 87,
      'English': 60,
      'Computer Science': 53
    }
  },
  {
    id: 'S008',
    name: 'Aditya',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A08',
    marks: {
      'Science': 28,
      'Social Studies': 21,
      'Mathematics': 25,
      'English': 29,
      'Computer Science': 23
    }
  },
  {
    id: 'S009',
    name: 'Meera',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A09',
    marks: {
      'Science': 75,
      'Social Studies': 46,
      'Mathematics': 85,
      'English': 59,
      'Computer Science': 50
    }
  },
  {
    id: 'S010',
    name: 'Karan',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A10',
    marks: {
      'Science': 73,
      'Social Studies': 44,
      'Mathematics': 83,
      'English': 56,
      'Computer Science': 49
    }
  },
  {
    id: 'S011',
    name: 'Ishita',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A11',
    marks: {
      'Science': 78,
      'Social Studies': 50,
      'Mathematics': 88,
      'English': 62,
      'Computer Science': 55
    }
  },
  {
    id: 'S012',
    name: 'Rohan',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A12',
    marks: {
      'Science': 29,
      'Social Studies': 26,
      'Mathematics': 19,
      'English': 25,
      'Computer Science': 22
    }
  },
  {
    id: 'S013',
    name: 'Neha',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A13',
    marks: {
      'Science': 74,
      'Social Studies': 47,
      'Mathematics': 84,
      'English': 58,
      'Computer Science': 51
    }
  },
  {
    id: 'S014',
    name: 'Aryan',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A14',
    marks: {
      'Science': 72,
      'Social Studies': 43,
      'Mathematics': 82,
      'English': 55,
      'Computer Science': 48
    }
  },
  {
    id: 'S015',
    name: 'Tanvi',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A15',
    marks: {
      'Science': 76,
      'Social Studies': 49,
      'Mathematics': 86,
      'English': 60,
      'Computer Science': 53
    }
  },
  {
    id: 'S016',
    name: 'Siddharth',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A16',
    marks: {
      'Science': 71,
      'Social Studies': 42,
      'Mathematics': 81,
      'English': 54,
      'Computer Science': 47
    }
  },
  {
    id: 'S017',
    name: 'Pooja',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A17',
    marks: {
      'Science': 75,
      'Social Studies': 48,
      'Mathematics': 85,
      'English': 59,
      'Computer Science': 52
    }
  },
  {
    id: 'S018',
    name: 'Vivek',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A18',
    marks: {
      'Science': 73,
      'Social Studies': 45,
      'Mathematics': 83,
      'English': 57,
      'Computer Science': 50
    }
  },
  {
    id: 'S019',
    name: 'Shreya',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A19',
    marks: {
      'Science': 77,
      'Social Studies': 50,
      'Mathematics': 87,
      'English': 61,
      'Computer Science': 54
    }
  },
  {
    id: 'S020',
    name: 'Raj',
    class: 'Grade 5',
    section: 'A',
    rollNo: '05A20',
    marks: {
      'Science': 70,
      'Social Studies': 41,
      'Mathematics': 80,
      'English': 53,
      'Computer Science': 46
    }
  }
];

// Simplified exams data (This will now also depend on the currentSubjectsConfig)
// We will move the generation of 'exams' inside components that use it, or adjust it based on currentSubjectsConfig
// For now, let's keep a placeholder here, but ExamModule will derive its `exams` dynamically.
export const exams = Object.keys(subjectsConfig).map((subject, index) => ({
  examId: `EXM${String(index + 1).padStart(3, '0')}`,
  examName: `${subject} Exam`,
  class: 'B.Sc Computer Science',
  subject: subject,
  maxMarks: subjectsConfig[subject].maxMarks, // This will be dynamic from the state in ExamModule
  status: 'Completed'
}));


export const getStudentGradeCategory = (percentage) => {
  if (percentage >= GOOD_THRESHOLD) return 'Good';
  // If a specific FAIL_THRESHOLD is desired within 'Poor' for a clearer distinction,
  // you can uncomment and adjust the following line, and potentially the categories.
  if (percentage < FAIL_THRESHOLD) return 'Poor'; // If percentage is below FAIL_THRESHOLD, it's 'Poor' (or 'Fail')
  if (percentage >= AVERAGE_THRESHOLD) return 'Average';
  return 'Poor'; // Any percentage below AVERAGE_THRESHOLD (that isn't already 'Good')
};


// Modify getClassReportData to accept students AND subjectsConfig as parameters
export const getClassReportData = (className, currentStudents, currentSubjectsConfig) => {
  // Use currentStudents instead of the globally imported 'students'
  const classStudents = currentStudents.filter(student => student.class === className);

  // Generate classExams dynamically based on the provided currentSubjectsConfig
  const classExams = Object.keys(currentSubjectsConfig).map(subject => ({
    subject: subject,
    maxMarks: currentSubjectsConfig[subject].maxMarks,
    // You might need other exam properties, add them if necessary
  }));

  const sections = Array.from(new Set(classStudents.map(s => s.section))).sort();
  const subjects = Array.from(new Set(classExams.map(e => e.subject))).sort();

  // Section Summary
  const sectionSummary = sections.map(section => {
    const studentsInSection = classStudents.filter(s => s.section === section);
    let studentsGradedCount = 0;
    let goodCount = 0;
    let averageCount = 0;
    let poorCount = 0;

    studentsInSection.forEach(student => {
      let studentOverallMarks = 0;
      let studentOverallMaxMarks = 0;
      let studentExamsAttempted = 0;

      Object.entries(student.marks).forEach(([subject, marks]) => {
        const exam = classExams.find(e => e.subject === subject);
        if (exam) {
          studentOverallMarks += marks;
          studentOverallMaxMarks += exam.maxMarks;
          studentExamsAttempted++;
        }
      });

      if (studentExamsAttempted > 0) {
        studentsGradedCount++;
        const percentage = (studentOverallMarks / studentOverallMaxMarks) * 100;
        const category = getStudentGradeCategory(percentage);
        if (category === 'Good') goodCount++;
        else if (category === 'Average') averageCount++;
        else poorCount++;
      }
    });

    const totalStudentsConsidered = goodCount + averageCount + poorCount;
    // Recalculate average percentage based on actual counts and thresholds
    const avgPercentage = totalStudentsConsidered > 0 ?
      ((goodCount * 100 + averageCount * 70 + poorCount * 25) / totalStudentsConsidered) : 0; // Using mid-points for illustration

    return {
      section: section,
      totalStudents: studentsInSection.length,
      studentsGraded: studentsGradedCount,
      averagePercentage: avgPercentage.toFixed(2),
      good: goodCount,
      average: averageCount,
      poor: poorCount
    };
  });

  // Subject Performance
  const subjectPerformance = subjects.map(subject => {
    let goodCount = 0;
    let averageCount = 0;
    let poorCount = 0;
    let totalStudentsWithGradesForSubject = 0;

    classStudents.forEach(student => {
      const marks = student.marks[subject];
      const exam = classExams.find(e => e.subject === subject); // Find the exam based on currentSubjectsConfig
      if (marks !== undefined && exam) { // Ensure marks exist and exam config is found
        totalStudentsWithGradesForSubject++;
        const percentage = (marks / exam.maxMarks) * 100;
        const category = getStudentGradeCategory(percentage);
        if (category === 'Good') goodCount++;
        else if (category === 'Average') averageCount++;
        else poorCount++;
      }
    });

    return {
      subject: subject,
      good: goodCount,
      average: averageCount,
      poor: poorCount,
      totalGradedStudents: totalStudentsWithGradesForSubject
    };
  });

  // Overall Class Performance for Pie Chart
  const overallClassGrades = { Good: 0, Average: 0, Poor: 0 };
  let totalStudentsConsideredForOverall = 0;

  classStudents.forEach(student => {
    let studentOverallMarks = 0;
    let studentOverallMaxMarks = 0;
    let studentExamsAttempted = 0;

    Object.entries(student.marks).forEach(([subject, marks]) => {
      const exam = classExams.find(e => e.subject === subject);
      if (exam) {
        studentOverallMarks += marks;
        studentOverallMaxMarks += exam.maxMarks;
        studentExamsAttempted++;
      }
    });

    if (studentExamsAttempted > 0) {
      totalStudentsConsideredForOverall++;
      const percentage = (studentOverallMarks / studentOverallMaxMarks) * 100;
      const category = getStudentGradeCategory(percentage);
      overallClassGrades[category]++;
    }
  });

  const overallClassChartData = [
    { name: 'Good', value: overallClassGrades.Good, color: '#22C55E' },
    { name: 'Average', value: overallClassGrades.Average, color: '#EAB308' },
    { name: 'Poor', value: overallClassGrades.Poor, color: '#EF4444' },
  ].filter(data => data.value > 0);

  return {
    sectionSummary,
    subjectPerformance,
    overallClassChartData,
    totalStudentsConsideredForOverall
  };
};

// We don't export getCompletedExams directly anymore, as exam max marks are dynamic
// based on currentSubjectsConfig.